import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'; // eslint-disable-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import {reducers} from './reducers';
import {Counter} from './counter';
import {watchDecrementAsync} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchDecrementAsync);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app')
);
