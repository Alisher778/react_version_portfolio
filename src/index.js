import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {Router, Route, IndexRoute, browserHistory,} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Router path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
    </Router>
  </Router>,
  document.getElementById('root')
);
