import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
//@ts-ignore
import reduxReset from 'redux-reset';
import { reducers, StoreState } from './reducers';
import { sagas } from './sagas';

export * from './reducers';
export * from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = () => {
  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares), reduxReset()),
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default store;

// SELECTORS
export const appSelector = (state: StoreState) => state.app;
export const contentSelector = (state: StoreState) => state.content;
export const playerSelector = (state: StoreState) => state.player;
export const userSelector = (state: StoreState) => state.user;
