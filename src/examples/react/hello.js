import React from 'react';
import PropTypes from 'prop-types';
import './hello.css';
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
        <img src={logo} styleName="logo" alt="" />
        <div>Hello <span styleName="name">{this.props.name}</span></div>
        <button styleName="submit-button" onClick={this.onClickHandler}>
          toggle: {this.state.toggle ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
};
