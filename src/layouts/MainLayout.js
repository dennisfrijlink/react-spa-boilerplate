import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = props => (
  <div>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/error">Error</Link>
    </div>
    <div>
      {props.children}
    </div>
  </div>
)

export default MainLayout;