import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';


// ACTIONS:

const INCREMENT_ACTION = 'INCREMENT_ACTION';
function incrementAction() {
  return {
    type: INCREMENT_ACTION
  };
}

const DECREMENT_ACTION = 'DECREMENT_ACTION';
function decrementAction() {
  return {
    type: DECREMENT_ACTION
  };
}

// REDUCERS:

const INITIAL_STATE = 2;

function rootReducer(state = INITIAL_STATE, action) {
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

// COMPONENTS:

class Counter$ extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrementHandler = this.onIncrementHandler.bind(this);
    this.onDecrementHandler = this.onDecrementHandler.bind(this);
  }

  onIncrementHandler() {
    this.props.dispatch(incrementAction());
  }

  onDecrementHandler() {
    this.props.dispatch(decrementAction());
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.onIncrementHandler}>increment</button>
        <button onClick={this.onDecrementHandler}>decrement</button>
      </div>
    );
  }
}

Counter$.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const Counter = connect(state => ({
  counter: state
}))(Counter$);

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app')
);
