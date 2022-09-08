import { ActionTypes, Action } from './types';
import { User } from '../../types';

export const setUserData: Action<User> = (payload) => ({
  type: ActionTypes.SET_USER_DATA,
  payload,
});

export const onLoginAction: Action<{ email: string, password: string, navigate: () => void }> = (payload) => ({
  type: ActionTypes.ON_LOGIN,
  payload,
});

export const onInitiateSignup: Action<{ email: string, password: string, navigate(): void }> = (payload) => ({
  type: ActionTypes.ON_INITIATE_SIGNUP,
  payload,  
});

export const setSignupFlowCredentials: Action<{ email: string, password: string }> = (payload) => ({
  type: ActionTypes.SET_SIGNUP_FLOW_CREDENTIALS,
  payload,
});

export const onVerifySignupEmail: Action<{ code: string, navigate(): void }> = (payload) => ({
  type: ActionTypes.ON_VERIFY_SIGNUP_EMAIL,
  payload,
});
