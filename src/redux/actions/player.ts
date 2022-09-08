import { ActionTypes, Action } from './types';
import { Article } from '../../types';

export const selectArticle: Action<{ article: Article, playingFrom: 'discover' | 'playlist', playlistId?: string }> = (payload) => ({
  type: ActionTypes.ON_SELECT_ARTICLE,
  payload,
});

export const togglePlayerModal: Action<boolean> = (payload) => ({
  type: ActionTypes.TOGGLE_PLAYER_MODAL,
  payload,
});

export const setArticle: Action<{ article: Article, playingFrom: 'discover' | 'playlist', playlistId?: string }> = (payload) => ({
  type: ActionTypes.SET_ARTICLE,
  payload,
});

export const onPressPlay = () => ({
  type: ActionTypes.ON_PLAY,
});

export const onPressPause = () => ({
  type: ActionTypes.ON_PAUSE,
})

export const setIsPlaying: Action<boolean> = (payload) => ({
  type: ActionTypes.ON_SET_IS_PLAYING,
  payload,
});

export const setPlaybackProgress: Action<{ duration: number, progress: number }> = (payload) => ({
  type: ActionTypes.SET_PLAYBACK_PROGRESS,
  payload,
});

export const setSeekingValue: Action<number> = (payload) => ({
  type: ActionTypes.SET_SEEKING_VALUE,
  payload,
});

export const onNext = (payload?: { fromAutoPlay: true }) => ({
  type: ActionTypes.ON_NEXT,
  payload,
});

export const onPrevious = () => ({
  type: ActionTypes.ON_PREVIOUS,
});
