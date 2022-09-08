import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { StoreState, ActionTypes, setPlaylists, userSelector, contentSelector, setAddPlaylistModalOpen, playerSelector, setPlaylistItemAdded, closePlaylistOptionsModal, closePlaylistItemOptionsModal } from '../../';
import { Playlist, PlaylistItem } from '../../../types';
import errorAlert from '../../../utilities/error-alert';

export default [
  createPlaylistWatcher,
  addToPlaylistWatcher,
  deletePlaylistWatcher,
  deletePlaylistItemWatcher,
];

function * createPlaylistWatcher() {
  yield takeLatest(ActionTypes.ON_CREATE_PLAYLIST, createPlaylistHandler);
}

function * addToPlaylistWatcher() {
  yield takeLatest(ActionTypes.ON_ADD_TO_PLAYLIST, addToPlaylistHandler)
}

function * deletePlaylistWatcher() {
  yield takeLatest(ActionTypes.ON_DELETE_PLAYLIST, deletePlaylistHandler);
}

function * deletePlaylistItemWatcher() {
  yield takeLatest(ActionTypes.ON_DELETE_PLAYLIST_ITEM, deletePlaylistItemHandler);
}

interface CreatePlaylistProps {
  type: ActionTypes.ON_CREATE_PLAYLIST,
  payload: {
    name: string;
  }
}

function * createPlaylistHandler({ payload }: CreatePlaylistProps) {
  try {
    if (!payload.name) {
      throw new Error('You need to give this playlist a name.');
    }

    const user: StoreState['user'] = yield select(userSelector);
    const content: StoreState['content'] = yield select(contentSelector);

    const fn = () => api
      .service('content/playlist')
      .create({
        name: payload.name,
        userId: user.details?._id,
      },{
        query: {
          $resolve: {
            playlistItems: true,
          },
        },
      });

    const playlist: Playlist = yield call(fn);

    const playlistClone = _cloneDeep(content.playlists);

    const newPlaylists = [playlist, ...playlistClone]

    yield put(setPlaylists(newPlaylists));
    yield put(setAddPlaylistModalOpen(false));
  } catch(e) {
    errorAlert(e);
  }
}

interface AddToPlaylistProps {
  type: ActionTypes.ON_ADD_TO_PLAYLIST,
  payload: {
    playlistId: string;
  };
}

function * addToPlaylistHandler({ payload }: AddToPlaylistProps) {
  try {
    const content: StoreState['content'] = yield select(contentSelector);
    const player: StoreState['player'] = yield select(playerSelector);
    const user: StoreState['user'] = yield select(userSelector);

    if (!player.article?._id) {
      throw new Error('No article was found');
    }

    const fn = () => api
      .service('content/playlist-item')
      .create({
        userId: user.details?._id,
        playlistId: payload.playlistId,
        articleId: player.article?._id,
      }, {
        query: {
          $resolve: {
            article: true,
          },
        },
      });

    const playlistItem: PlaylistItem = yield call(fn);

    const clonedPlaylists = _cloneDeep(content.playlists);

    const updatedPlaylists = clonedPlaylists.map(p => {
      if (p._id === playlistItem.playlistId) {
        return {
          ...p,
          playlistItems: [...(p?.playlistItems || []), playlistItem],
          count: (p.count ?? 0) + 1,
        };
      }

      return p;
    });

    yield put(setPlaylists(updatedPlaylists));
    yield put(setPlaylistItemAdded(true));
  } catch(e) {
    errorAlert(e);
  }
}

function * deletePlaylistHandler() {
  try {
    const content: StoreState['content'] = yield select(contentSelector);

    if (!content.playlistOptionsModal.playlistId) {
      throw new Error('Must select a valid playlist to delete');
    }

    const fn = () => api
      .service('content/playlist')
      .remove(content.playlistOptionsModal.playlistId);

    const res: Playlist = yield call(fn);
    const playlistsClone = _cloneDeep(content.playlists);
    const updatedPlaylists = playlistsClone.filter(p => p._id !== res._id);

    yield put(setPlaylists(updatedPlaylists));
    yield put(closePlaylistOptionsModal());

  } catch(e) {
    errorAlert(e);
  }
}

function * deletePlaylistItemHandler() {
  try {
    const content: StoreState['content'] = yield select(contentSelector);

    if (!content.playlistItemOptionsModal.playlistItemId) {
      throw new Error('Must select a valid article to delete from this playlist');
    }

    const fn = () => api
      .service('content/playlist-item')
      .remove(content.playlistItemOptionsModal.playlistItemId);

    const res: PlaylistItem = yield call(fn);
    const playlistsClone = _cloneDeep(content.playlists);

    const updatedPlaylists = playlistsClone.map(p => {
      if (p._id === res.playlistId) {
        return {
          ...p,
          playlistItems: p.playlistItems?.filter(pl => pl._id !== res._id),
        };
      }

      return p;
    });

    yield put(setPlaylists(updatedPlaylists));
    yield put(closePlaylistItemOptionsModal());

  } catch(e) {
    errorAlert(e);
  }
}