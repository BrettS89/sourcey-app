import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Article } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface PlayerState {
  article?: Article;
  isPlayerModalOpen: boolean;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  playingFrom?: 'discover' | 'playlist',
  playlistId?: string;
}

const INITIAL_STATE: PlayerState = {
  article: undefined,
  isPlayerModalOpen: false,
  isPlaying: false,
  volume: 0.5,
  progress: 0,
  duration: 0,
  playingFrom: undefined,
};

export const playerReducer: Reducer<PlayerState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_ARTICLE:
      return {
        ...state,
        article: payload.article,
        progress: 0,
        playingFrom: payload.playingFrom,
        playlistId: payload.playlistId,
      };

    case ActionTypes.ON_SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: payload,
      };

    case ActionTypes.TOGGLE_PLAYER_MODAL:
      return {
        ...state,
        isPlayerModalOpen: payload,
      };

    case ActionTypes.SET_PLAYBACK_PROGRESS:
      return {
        ...state,
        duration: payload.duration,
        progress: payload.progress,
      }

    default:
      return state;
  }
};
