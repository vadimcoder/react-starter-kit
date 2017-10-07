import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.sass';

function CssModulesClassNameSass() {
  return (
    <div className={style.parent}>
      <div className={style.child} />
    </div>
  );
}

ReactDOM.render(
  <CssModulesClassNameSass />,
  document.querySelector('#app')
);
