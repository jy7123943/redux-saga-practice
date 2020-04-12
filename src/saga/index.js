import { takeEvery, put, call } from 'redux-saga/effects';
// take -> call: 여러 번 dispatch해도 한 번만 실행됨
// takeEvery: watch action calls
// put: let us dispatch actions
import { IMAGES } from '../constants';
import { getSplashImage } from '../api';
import { setImages, setError } from '../actions';

// worker saga
function* handleImagesLoad() {
  try {
    const images = yield call(getSplashImage);

    yield put(setImages(images));
  } catch (err) {
    yield put(setError(err));
  }
}

// watcher saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga -> actions -> worker saga
export default rootSaga;
