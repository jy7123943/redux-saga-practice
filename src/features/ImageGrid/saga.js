import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getSplashImage } from '../../api';
import { unsplashAction, unsplashSelector } from './slice';

export function* handleImageLoad() {
  const { loadSuccess, loadFail } = unsplashAction;

  try {
    const page = yield select(unsplashSelector.page);
    const prevImages = yield select(unsplashSelector.images);
    const nextPage = page + 1;

    const newImages = yield call(getSplashImage, nextPage);

    yield put(loadSuccess({
      images: prevImages.concat(newImages),
      nextPage,
    }));
  } catch (err) {
    yield put(loadFail(err));
  }
}

export function* watchUnsplash() {
  const { load, loadMore } = unsplashAction;

  yield takeLatest(load, handleImageLoad);
  yield takeLatest(loadMore, handleImageLoad);
}
