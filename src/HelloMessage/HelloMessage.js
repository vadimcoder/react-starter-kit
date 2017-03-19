import * as React from 'react';
import './HelloMessage.scss';

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: true};
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
                <button onClick={this.onClickHandler.bind(this)}>
                    toggle: {this.state.toggle ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

HelloMessage.propTypes = {
    name: React.PropTypes.string
};
