import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layouts/App';

import './assets/sass/_all.scss'

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const Root = (props) => {
  return (
  <Router>
    <App>
      <Suspense fallback={<div></div>}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </App>
  </Router>
  );
};

export default Root;