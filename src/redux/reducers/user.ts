import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { User } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface UserState {
  details?: User;
  signupFlow: {
    email?: string;
    password?: string;
  };
}

const INITIAL_STATE: UserState = {
  signupFlow: {},
};

export const userReducer: Reducer<UserState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        details: payload,
      };

    case ActionTypes.SET_SIGNUP_FLOW_CREDENTIALS:
      return {
        ...state,
        signupFlow: payload,
      };
      
    default:
      return state;
  }
};
