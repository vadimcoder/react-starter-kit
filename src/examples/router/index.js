import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';

const Route1 = () => <h2>Route1</h2>;
const Route2 = () => <h2>Route2</h2>;

const App = (props) => {
  console.log('App', props); // eslint-disable-line no-console

  return (
    <div>
      <p><Link to="/route1">route1</Link></p>
      <p><Link to="/route2">route2</Link></p>

      <Route path="/route1" component={Route1} />
      <Route path="/route2" component={Route2} />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.querySelector('#app')
);
