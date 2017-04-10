import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mapStateToProps from './map-state';
import {incrementAction, decrementAction, decrementAsyncAction} from './actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrementHandler = this.onIncrementHandler.bind(this);
        this.onDecrementHandler = this.onDecrementHandler.bind(this);
        this.onDecrementAsyncHandler = this.onDecrementAsyncHandler.bind(this);
    }

    onIncrementHandler() {
        this.props.dispatch(incrementAction());
    }

    onDecrementHandler() {
        this.props.dispatch(decrementAction());
    }

    onDecrementAsyncHandler() {
        this.props.dispatch(decrementAsyncAction());
    }

    render() {
        return (
            <div>
                <div>{this.props.counter}</div>
                <button onClick={this.onIncrementHandler}>increment</button>
                <button onClick={this.onDecrementHandler}>decrement</button>
                <button onClick={this.onDecrementAsyncHandler}>decrement async</button>
            </div>
        );
    }
}

Counter.propTypes = {
    dispatch: PropTypes.func,
    counter: PropTypes.number
};

export default connect(mapStateToProps)(Counter);