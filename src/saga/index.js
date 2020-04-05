import { takeEvery, put } from 'redux-saga/effects';
// takeEvery: watch action calls
// put: let us dispatch actions

// worker saga
function* workerSaga() {
  console.log('Hey from worker');
  console.log()
  yield put({
    type: 'ACTION_FROM_WORKER'
  });
}

// watcher saga
function* rootSaga() {
  console.log('saga run');
  yield takeEvery('HELLO', workerSaga);
}

// watcher saga -> actions -> worker saga

export default rootSaga;
