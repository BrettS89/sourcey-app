import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { contentReducer, ContentState } from './content';
import { playerReducer, PlayerState } from './player';
import { userReducer, UserState } from './user';

export interface StoreState {
  app: AppState;
  content: ContentState;
  player: PlayerState;
  user: UserState;
}

export const reducers = combineReducers({
  app: appReducer,
  content: contentReducer,
  user: userReducer,
  player: playerReducer,
});
