import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const App = ({ children }) => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <Fragment>
        {children}
      </Fragment>
    </Fragment>
  );
};

export default App;