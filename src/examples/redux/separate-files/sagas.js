import {take, call, put} from 'redux-saga/effects';
import * as actions from './actions';

function sleep() {
  const TIMEOUT = 1000;

  return new window.Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, TIMEOUT);
  });
}

function* decrementAsync() {
  yield call(sleep);
  yield put(actions.decrementAction());
}

export default function* watchDecrementAsync() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(actions.DECREMENT_ASYNC_ACTION);
    yield call(decrementAsync);
  }
}

// import {takeLatest} from 'redux-saga/effects';
// export function * watchDecrementAsync() {
//     yield [
//         takeLatest(actions.DECREMENT_ASYNC_ACTION, decrementAsync)
//     ];
// }
