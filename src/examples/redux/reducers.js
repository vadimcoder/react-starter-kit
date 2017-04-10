import {INCREMENT_ACTION, DECREMENT_ACTION} from './actions';

const INITIAL_STATE = 0;

export function rootReducer(state = INITIAL_STATE, action) {
    const STEP = 1;

    switch (action.type) {
        case INCREMENT_ACTION:
            return state + STEP;
        case DECREMENT_ACTION:
            return state - STEP;
        default:
            return state;
    }
}