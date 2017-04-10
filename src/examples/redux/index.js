import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import {rootReducer} from './reducers';
import Counter from './counter';
import {watchDecrementAsync} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchDecrementAsync);

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.querySelector('#app')
);