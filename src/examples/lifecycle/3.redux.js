import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import {Component} from './component';

const VALUE_1_INCREMENT = 'VALUE_1_INCREMENT';
function value1Increment() {
  return {
    type: VALUE_1_INCREMENT
  };
}

const VALUE_2_INCREMENT = 'VALUE_2_INCREMENT';
function value2Increment() {
  return {
    type: VALUE_2_INCREMENT
  };
}

function reducer(state = {value1: {deepProp: 0}, value2: 0}, action) {
  switch (action.type) {
    case VALUE_1_INCREMENT:
      return {
        ...state,
        value1: {deepProp: state.value1.deepProp + 1}
      };
    case VALUE_2_INCREMENT:
      return {
        ...state,
        value2: state.value2 + 1
      };
    default:
      return state;
  }
}

const ConnectedComponent = connect(state => ({
  value: state.reducer.value1
}))(Component);

const store = createStore(
  combineReducers({reducer}),
  applyMiddleware(logger)
);

window.value1Increment = () => {
  store.dispatch(value1Increment());
};

window.value2Increment = () => {
  store.dispatch(value2Increment());
};


ReactDOM.render(
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>,
  document.querySelector('#app')
);
