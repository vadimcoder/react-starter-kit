import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from './component';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({value: 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>setState</button>
        <Component value={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#app')
);
