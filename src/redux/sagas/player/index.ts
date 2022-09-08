import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import { StoreState, ActionTypes, setIsPlaying, setArticle, onPressPlay, playerSelector, contentSelector, selectArticle, onNext, onPressPause } from '../../';
import errorAlert from '../../../utilities/error-alert';
import audio from '../../../utilities/audio';
import { Article } from '../../../types';

export default [
  playWatcher,
  pauseWatcher,
  selectArticleWatcher,
  onNextWatcher,
  onPreviousWatcher,
  onFinishPlayingArticleWatcher,
];

function * playWatcher() {
  yield takeLatest(ActionTypes.ON_PLAY, playHandler);
}

function * pauseWatcher() {
  yield takeLatest(ActionTypes.ON_PAUSE, pauseHandler);
}

function * selectArticleWatcher() {
  yield takeLatest(ActionTypes.ON_SELECT_ARTICLE, selectArticleHandler);
}

function * onNextWatcher() {
  yield takeLatest(ActionTypes.ON_NEXT, onNextHandler);
}

function * onPreviousWatcher() {
  yield takeLatest(ActionTypes.ON_PREVIOUS, onPreviousHandler);
}

function * onFinishPlayingArticleWatcher() {
  yield takeLatest(ActionTypes.SET_PLAYBACK_PROGRESS, onFinishPlayingArticleHandler);
}

function * playHandler() {
  try {
  yield put(setIsPlaying(true));
  yield audio.playAsync();
  } catch(e) {}
}

function * pauseHandler() {
  try {
  yield put(setIsPlaying(false));
  yield audio.pauseAsync();
  } catch(e) {}
}

interface SelectArticleProps {
  type: ActionTypes.ON_SELECT_ARTICLE,
  payload: {
    article: Article;
    playingFrom: 'discover' | 'playlist',
    playlistId?: string;
  };
}

function * selectArticleHandler({ payload }: SelectArticleProps) {
  try {
    yield put(setArticle(payload));
    yield audio.unloadAsync();
    yield audio.loadAsync({ uri: payload.article.audioFile?.urls?.delivery! });
    yield put(onPressPlay());
  } catch(e) {
    console.log(e);
  }
}

interface OnNext {
  type: string;
  payload: {
    fromAutoPlay: boolean
  }
}

function * onNextHandler({ payload }: OnNext) {
  try {
    const player: StoreState['player'] = yield select(playerSelector);
    const content: StoreState['content'] = yield select(contentSelector);

    if (player.playingFrom !== 'playlist') {
      const idx = content.articles?.findIndex(a => a._id === player.article?._id);
      const article = content.articles[idx! + 1];

      if (article) {
        if (player.isPlaying) {
          yield put (selectArticle({
            article,
            playingFrom: 'discover',
          }));
        } else {
          yield put(setArticle({
            article: article,
            playingFrom: 'discover',
          }));
          yield audio.unloadAsync();
          yield audio.loadAsync({ uri: article!.audioFile?.urls?.delivery });
        }
      } else {
        if (payload?.fromAutoPlay) {
          yield put(onPressPause());
        }
      }

    } else {
      const _id = player.playlistId as string;
      const playlist = content.playlists.find(p => p._id === _id);
      const idx = playlist?.playlistItems?.findIndex(p => p.article?._id === player.article?._id);
      const playlistItem = playlist?.playlistItems?.[idx! + 1];

      if (playlistItem) {
        if (player.isPlaying) {
          yield put (selectArticle({
            article: playlistItem.article!,
            playingFrom: 'playlist',
            playlistId: _id 
          }));
        } else {
          yield put(setArticle({
            article: playlistItem?.article!,
            playingFrom: 'playlist',
            playlistId: _id,
          }));
          yield audio.unloadAsync();
          yield audio.loadAsync({ uri: playlistItem?.article!.audioFile?.urls?.delivery });
        }
      } else {
        if (payload?.fromAutoPlay) {
          yield put(onPressPause());
        }
      }

    }

  } catch {}
}

function * onPreviousHandler() {
  try {
    const player: StoreState['player'] = yield select(playerSelector);
    const content: StoreState['content'] = yield select(contentSelector);

    if (player.playingFrom === 'discover') {
      const idx = content.articles?.findIndex(a => a._id === player.article?._id);
      const article = content.articles[idx! - 1];

      if (article) {
        if (player.isPlaying) {
          yield put (selectArticle({
            article: article,
            playingFrom: 'discover',
          }));
        } else {
          yield put(setArticle({
            article: article,
            playingFrom: 'discover',
          }));
          yield audio.unloadAsync();
          yield audio.loadAsync({ uri: article!.audioFile?.urls?.delivery });
        }
      }
    } else {
      const _id = player.playlistId as string;
      const playlist = content.playlists.find(p => p._id === _id);
      const idx = playlist?.playlistItems?.findIndex(p => p.article?._id === player.article?._id);
      const playlistItem = playlist?.playlistItems?.[idx! - 1];

      if (playlistItem) {
        if (player.isPlaying) {
          yield put (selectArticle({
            article: playlistItem.article!,
            playingFrom: 'playlist',
            playlistId: _id 
          }));
        } else {
          yield put(setArticle({
            article: playlistItem?.article!,
            playingFrom: 'playlist',
            playlistId: _id,
          }));
          yield audio.unloadAsync();
          yield audio.loadAsync({ uri: playlistItem?.article!.audioFile?.urls?.delivery });
        }
      }

    }

  } catch {}
}

interface PlaybackStatus {
  type: ActionTypes.SET_PLAYBACK_PROGRESS;
  payload: any;
}

function * onFinishPlayingArticleHandler({ payload }: PlaybackStatus) {
  try {
    if (payload.duration === payload.progress) {
      yield put(onNext({ fromAutoPlay: true }));
    }
  } catch {}
}
