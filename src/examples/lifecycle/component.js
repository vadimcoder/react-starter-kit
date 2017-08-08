import React from 'react';
import PropTypes from 'prop-types';

export class Component extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor'); // eslint-disable-line no-console
  }

  componentWillMount() {
    console.log('componentWillMount'); // eslint-disable-line no-console
  }

  componentDidMount() {
    console.log('componentDidMount'); // eslint-disable-line no-console
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps'); // eslint-disable-line no-console
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate'); // eslint-disable-line no-console
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate'); // eslint-disable-line no-console
  }

  componentDidUpdate() {
    console.log('componentDidUpdate'); // eslint-disable-line no-console
  }

  render() {
    console.log('render', this.props); // eslint-disable-line no-console

    return <span>{JSON.stringify(this.props.value)}</span>;
    // return null;
  }
}

Component.propTypes = {
  value: PropTypes.shape({}).isRequired
};
