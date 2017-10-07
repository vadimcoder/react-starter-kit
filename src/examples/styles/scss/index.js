import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function Scss() {
  return (
    <div className="parent">
      <div className="child" />
    </div>
  );
}

ReactDOM.render(
  <Scss />,
  document.querySelector('#app')
);
