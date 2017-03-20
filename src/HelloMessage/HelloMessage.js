import * as React from 'react';
import './HelloMessage.scss';

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: true};

        // We generally recommend binding in the constructor or using the property initializer syntax,
        // to avoid this sort of performance problem.
        // https://facebook.github.io/react/docs/handling-events.html
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        return (
            <div>
                <div>Hello {this.props.name}</div>
                <button onClick={this.onClickHandler}>
                    toggle: {this.state.toggle ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

HelloMessage.propTypes = {
    name: React.PropTypes.string
};
