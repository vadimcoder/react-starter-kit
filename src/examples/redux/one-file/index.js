import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';


// ACTIONS:

const ACTION_1 = 'ACTION_1';
function action1() {
  return {
    type: ACTION_1
  };
}

const ACTION_2 = 'ACTION_2';
function action2() {
  return {
    type: ACTION_2
  };
}

// REDUCERS:

function foo(state = {a: 1}, action) {
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        a: state.a + 1
      };
    default:
      return state;
  }
}

function bar(state = {b: 2}, action) {
  switch (action.type) {
    case ACTION_2:
      return {
        ...state,
        b: state.b + 1
      };
    default:
      return state;
  }
}

// COMPONENTS:

class Counter$ extends React.Component {
  constructor(props) {
    super(props);
    this.fireAction1 = this.fireAction1.bind(this);
    this.fireAction2 = this.fireAction2.bind(this);
  }

  fireAction1() {
    this.props.action1();
  }

  fireAction2() {
    this.props.action2();
  }

  render() {
    return (
      <div>
        <div>{JSON.stringify(this.props.foo)}</div>
        <div>{JSON.stringify(this.props.bar)}</div>
        <button onClick={this.fireAction1}>fireAction1</button>
        <button onClick={this.fireAction2}>fireAction2</button>
      </div>
    );
  }
}

Counter$.propTypes = {
  foo: PropTypes.shape().isRequired,
  bar: PropTypes.shape().isRequired,
  action1: PropTypes.func.isRequired,
  action2: PropTypes.func.isRequired
};

const Counter = connect(({foo, bar}) => ({foo, bar}), {action1, action2})(Counter$); // eslint-disable-line no-shadow

const store = createStore(
  combineReducers({foo, bar}),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app')
);
