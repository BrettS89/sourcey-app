import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { StoreState, setArticles, setUserData, ActionTypes, setPlaylists, setSignupFlowCredentials, userSelector, onLoginAction } from '../../';
import { User, Articles, Playlists } from '../../../types';
import { getDataAfterAuthentication } from '../utilities';
import errorAlert from '../../../utilities/error-alert';

export default [
  loginWatcher,
  initiateSignupWatcher,
  verifySignupEmailWatcher,
];

function * loginWatcher() {
  yield takeLatest(ActionTypes.ON_LOGIN, loginHandler);
}

function * initiateSignupWatcher() {
  yield takeLatest(ActionTypes.ON_INITIATE_SIGNUP, onInitiateSignupHandler)
}

function * verifySignupEmailWatcher() {
  yield takeLatest(ActionTypes.ON_VERIFY_SIGNUP_EMAIL, verifySignupEmailHandler);
}

interface LoginProps {
  type: ActionTypes.ON_LOGIN,
  payload: {
    email: string;
    password: string;
    navigate(): void
  }
}

function * loginHandler({ payload }: LoginProps) {
  try {
    const loginFn = () => api
      .service('security/session')
      .create({
        email: payload.email,
        password: payload.password,
      });

  const { user, token }: { user: User, token: string } = yield call(loginFn);

  yield AsyncStorage.setItem('token', token);

  const [articles, playlists]: [Articles, Playlists] = yield getDataAfterAuthentication(user._id);
  
  yield put(setUserData(user));
  yield put(setArticles(articles.data));
  yield put(setPlaylists(playlists.data));

  payload.navigate();
  } catch(e) {
    errorAlert(e);
  }
}

interface InitiateSignup {
  type: ActionTypes.ON_INITIATE_SIGNUP,
  payload: {
    email: string;
    password: string;
    navigate(): void;
  };
}

function * onInitiateSignupHandler({ payload: { email, password, navigate } }: InitiateSignup) {
  try {
    if (!email || !password) {
      throw new Error('Email and password are both required');
    }

    const fn = () => api
      .service('security/verification')
      .create({
        email,
        type: 'signup',
      });

    yield call(fn);

    yield put(setSignupFlowCredentials({ email, password }));

    navigate();
  } catch(e) {
    errorAlert(e);
  }
}

interface VerifySignupEmail {
  type: ActionTypes.ON_VERIFY_SIGNUP_EMAIL,
  payload: {
    code: string;
    navigate(): void;
  }
}

function * verifySignupEmailHandler({ payload }: VerifySignupEmail) {
  try {
    const user: StoreState['user'] = yield select(userSelector);

    if (!payload.code || payload.code?.length !== 6) {
      throw new Error('The verification code must contain six digits.');
    }

    const fn = () => api
      .service('security/verification')
      .get('wtfff', {
        query: {
          email: user.signupFlow.email,
          password: user.signupFlow.password,
          code: payload.code,
          type: 'signup',
        },
      });

    yield call(fn);

    yield put(onLoginAction({
      email: user.signupFlow.email!,
      password: user.signupFlow.password!,
      navigate: payload.navigate,
    }))

  } catch(e) {
    errorAlert(e);
  }
}
