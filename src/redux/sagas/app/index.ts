import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { StoreState, ActionTypes, setAppInitialized, setArticles, setUserData, setPlaylists } from '../../';
import { User, Articles, Playlists } from '../../../types';
import { getDataAfterAuthentication } from '../utilities';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(ActionTypes.ON_APP_LOAD, appLoadHandler);
}

interface AppLoad {
  type: ActionTypes.ON_APP_LOAD;
  payload: {
    navigate(str: string): void;
    path?: string;
  }
}

function * appLoadHandler({ payload }: AppLoad): any {
  try {
    const token: string | undefined = yield AsyncStorage.getItem('token');
    
    if (!token) throw new Error('no token');

    const fn = () => api.service('security/session').find();
    
    const userData: User = yield call(fn);

    const [articles, playlists]: [Articles, Playlists] = yield getDataAfterAuthentication(userData._id);

    yield put(setUserData(userData));
    yield put(setArticles(articles.data));
    yield put(setPlaylists(playlists.data));

    payload.navigate('Home');

  } catch(e) {
    payload.navigate('Landing')
  }

  yield put(setAppInitialized(true));
}
