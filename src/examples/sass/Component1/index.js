import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export function Component1() {
  return <div className="foo">Component1</div>;
}

ReactDOM.render(
  <Component1 />,
  document.querySelector('#app')
);
