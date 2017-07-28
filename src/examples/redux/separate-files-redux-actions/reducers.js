import {handleActions} from 'redux-actions';
import {
  action1,
  action2,
  action3} from './actions';

const INITIAL_STATE = {};

export default handleActions({
  [action1](state, {payload: {value1}}) {
    return {
      ...state,
      value1
    };
  },
  [action2](state, {payload: {value2}}) {
    return {
      ...state,
      value2
    };
  },
  [action3]() {
    return INITIAL_STATE;
  }
}, INITIAL_STATE);
