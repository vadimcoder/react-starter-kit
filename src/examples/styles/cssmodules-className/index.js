import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

function CssModulesClassName() {
  return (
    <div className={style.myBlock} />
  );
}

ReactDOM.render(
  <CssModulesClassName />,
  document.querySelector('#app')
);
