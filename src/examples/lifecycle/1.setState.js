import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor'); // eslint-disable-line no-console
    this.state = {value: 1};

    this.onClickHandler = this.onClickHandler.bind(this);
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

  onClickHandler() {
    this.setState({value: 1});
  }

  render() {
    console.log('render', this.props); // eslint-disable-line no-console

    return <button onClick={this.onClickHandler}>setState</button>;
  }
}

ReactDOM.render(
  <Component />,
  document.querySelector('#app')
);
