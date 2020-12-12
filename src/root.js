import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import './assets/css/fonts.css';
import './assets/scss/main.scss';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch></Switch>
      </div>
    </Router>
  );
};

export default Root;