import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'; // eslint-disable-line import/no-extraneous-dependencies
import reducers from './reducers';
import Counter from './counter';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app')
);
