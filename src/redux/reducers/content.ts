import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Article, Playlist } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface ContentState {
  articles: Article[];
  playlists: Playlist[];
  selectedPlaylist?: string;
  isAddPlaylistModalOpen: boolean;
  isAddToPlaylistModalOpen: boolean;
  playListItemAdded: boolean;
  playlistOptionsModal: {
    open: boolean;
    playlistId: null | string;
  };
  playlistItemOptionsModal: {
    open: boolean;
    playlistItemId: null | string,
  };
}

const INITIAL_STATE: ContentState = {
  articles: [],
  playlists: [],
  selectedPlaylist: undefined,
  isAddPlaylistModalOpen: false,
  isAddToPlaylistModalOpen: false,
  playListItemAdded: false,
  playlistOptionsModal: {
    open: false,
    playlistId: null,
  },
  playlistItemOptionsModal: {
    open: false,
    playlistItemId: null,
  }
};

export const contentReducer: Reducer<ContentState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };

    case ActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: payload,
      };

    case ActionTypes.SET_ADD_PLAYLIST_MODAL_OPEN:
      return {
        ...state,
        isAddPlaylistModalOpen: payload,
      };

    case ActionTypes.SET_ADD_TO_PLAYLIST_MODAL_OPEN:
      return {
        ...state,
        isAddToPlaylistModalOpen: payload,
      };

    case ActionTypes.SET_PLAYLIST_ITEM_ADDED:
      return {
        ...state,
        playListItemAdded: payload,
      };

    case ActionTypes.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: payload,
      };

    case ActionTypes.CLOSE_PLAYLIST_OPTIONS_MODAL:
      return {
        ...state,
        playlistOptionsModal: payload,
      };

    case ActionTypes.OPEN_PLAYLIST_OPTIONS_MODAL:
      return {
        ...state,
        playlistOptionsModal: payload,
      };

    case ActionTypes.CLOSE_PLAYLIST_ITEM_OPTIONS_MODAL:
      return {
        ...state,
        playlistItemOptionsModal: payload,
      };

    case ActionTypes.OPEN_PLAYLIST_ITEM_OPTIONS_MODAL:
      return {
        ...state,
        playlistItemOptionsModal: payload,
      };

    default:
      return state;
  }
};
