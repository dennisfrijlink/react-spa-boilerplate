import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './router/AppRoute'; 

import ErrorLayout from './layouts/ErrorLayout';
import MainLayout from './layouts/MainLayout';

import Error from './pages/Error';
import Home from './pages/Home';
import News from './pages/News';

import './assets/css/fonts.css';
import './assets/scss/main.scss';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <AppRoute exact path="/" layout={MainLayout} page={Home} />
          <AppRoute exact path="/news" layout={MainLayout} page={News} />
          <AppRoute exact path="/error" layout={ErrorLayout} page={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;