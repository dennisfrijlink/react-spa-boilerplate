import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = props => (
  <div>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/error">Error</Link>
    </div>
    <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', width: 'fit-content', height: 'fit-content'}}>
      {props.children}
    </div>
  </div>
)

export default MainLayout;