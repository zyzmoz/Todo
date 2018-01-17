import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import Menu from './components/Menu';
import HomePage from './pages/Home';
import AddGoal from './pages/AddGoal';

import Foundation from 'react-foundation';
import './assets/css/foundation.css';
import './assets/css/foundation.min.css';
import './assets/css/master.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="padding">
        <Menu />
        <Route exact path="/" component={HomePage}/>
        <Route path="/add" component={AddGoal} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
