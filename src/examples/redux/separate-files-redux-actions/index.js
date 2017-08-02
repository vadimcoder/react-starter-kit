import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'; // eslint-disable-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import {reducer} from './reducers';
import {watchAction1} from './sagas';
import {action1} from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({reducer}),
  applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchAction1);

store.dispatch(action1({value1: 1}));
