import { ActionTypes, Action } from './types';
import { Article, Playlist } from '../../types';

export const setArticles: Action<Article[]> = (payload) => ({
  type: ActionTypes.SET_ARTICLES,
  payload,
});

export const setPlaylists: Action<Playlist[]> = (payload) => ({
  type: ActionTypes.SET_PLAYLISTS,
  payload,
});

export const setAddPlaylistModalOpen: Action<boolean> = (payload) => ({
  type: ActionTypes.SET_ADD_PLAYLIST_MODAL_OPEN,
  payload,
});

export const createPlaylist: Action<{ name: string }> = (payload) => ({
  type: ActionTypes.ON_CREATE_PLAYLIST,
  payload,
});

export const setAddToPlaylistModalOpen: Action<boolean> = (payload) => ({
  type: ActionTypes.SET_ADD_TO_PLAYLIST_MODAL_OPEN,
  payload,
});

export const addToPlaylist: Action<{ playlistId: string }> = (payload) => ({
  type: ActionTypes.ON_ADD_TO_PLAYLIST,
  payload,
});

export const setPlaylistItemAdded: Action<boolean> = (payload) => ({
  type: ActionTypes.SET_PLAYLIST_ITEM_ADDED,
  payload,
});

export const setSelectedPlaylist: Action<string> = (payload) => ({
  type: ActionTypes.SET_SELECTED_PLAYLIST,
  payload,
});

export const onDeletePlaylist = () => ({
  type: ActionTypes.ON_DELETE_PLAYLIST,
});

export const openPlaylistOptionsModal: Action<any> = (payload) => ({
  type: ActionTypes.OPEN_PLAYLIST_OPTIONS_MODAL,
  payload: {
    playlistId: payload,
    open: true,
  },
});

export const closePlaylistOptionsModal = () => ({
  type: ActionTypes.CLOSE_PLAYLIST_OPTIONS_MODAL,
  payload: {
    playlistId: null,
    open: false,
  },
});

export const onDeletePlaylistItem = () => ({
  type: ActionTypes.ON_DELETE_PLAYLIST_ITEM,
});

export const openPlaylistItemOptionsModal: Action<any> = (payload) => ({
  type: ActionTypes.OPEN_PLAYLIST_ITEM_OPTIONS_MODAL,
  payload: {
    playlistItemId: payload,
    open: true,
  },
});

export const closePlaylistItemOptionsModal = () => ({
  type: ActionTypes.CLOSE_PLAYLIST_ITEM_OPTIONS_MODAL,
  payload: {
    playlistItemId: null,
    open: false,
  },
});