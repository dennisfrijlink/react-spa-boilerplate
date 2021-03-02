import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './router/AppRoute';

//styles
import '../src/assets/css/fonts.css';
import '../src/assets/css/theme.css';

//layouts
import MainLayout from './layouts/mainLayout/MainLayout';

//pages
import IndexPage from './pages/indexPage/IndexPage';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <AppRoute exact path="/" layout={MainLayout} page={IndexPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default Root;