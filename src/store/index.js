import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';
import { UNSPLASH, unsplashReducer } from '../containers/ImageGrid/slice';
import { watchUnsplash } from '../containers/ImageGrid/saga';

export const rootReducer = combineReducers({
  [UNSPLASH]: unsplashReducer,
});

const sagaMiddleware = createSagaMiddleware();
export function* rootSaga() {
  yield all([
    watchUnsplash(),
  ])
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default createStore;
