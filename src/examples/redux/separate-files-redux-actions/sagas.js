import {take} from 'redux-saga/effects';
import {action1} from './actions';

export default function* watchAction1() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(action1);
    console.log('watchAction1 saga!'); // eslint-disable-line no-console
  }
}
