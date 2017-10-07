import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};

    // We generally recommend binding in the constructor or using the property initializer syntax,
    // to avoid this sort of performance problem.
    // https://facebook.github.io/react/docs/handling-events.html
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    return (
      <div>
        <img style={{width: '20px'}} src={logo} alt="" />
        <div>Hello {this.props.name}</div>
        <button onClick={this.onClickHandler}>
          toggle: {this.state.toggle ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
};
