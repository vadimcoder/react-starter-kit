export const INCREMENT_ACTION = 'INCREMENT_ACTION';
export function incrementAction() {
    return {
        type: INCREMENT_ACTION
    };
}

export const DECREMENT_ACTION = 'DECREMENT_ACTION';
export function decrementAction() {
    return {
        type: DECREMENT_ACTION
    };
}

export const DECREMENT_ASYNC_ACTION = 'DECREMENT_ASYNC_ACTION';
export function decrementAsyncAction() {
    return {
        type: DECREMENT_ASYNC_ACTION
    };
}