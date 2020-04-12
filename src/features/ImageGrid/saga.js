import { call, put, takeLatest } from 'redux-saga/effects';
import { getSplashImage } from '../../api';
import { unsplashAction } from './slice';

function* handleImageLoad() {
  const { loadSuccess, loadFail } = unsplashAction;
  try {
    const images = yield call(getSplashImage);

    yield put(loadSuccess(images));
  } catch (err) {
    yield put(loadFail(err));
  }
}

export function* watchUnsplash() {
  const { load } = unsplashAction;

  yield takeLatest(load, handleImageLoad);
}
