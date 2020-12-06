import React from 'react';

const ErrorLayout = props => (
  <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', width: 'fit-content', height: 'fit-content'}}>
    {props.children}
  </div>
)

export default ErrorLayout;