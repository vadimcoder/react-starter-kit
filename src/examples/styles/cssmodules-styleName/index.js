import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// see react-css-modules in webpack config

function CssModulesStyleName() {
  return (
    <div styleName="myBlock" />
  );
}

ReactDOM.render(
  <CssModulesStyleName />,
  document.querySelector('#app')
);
