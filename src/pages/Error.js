import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <code style={{ fontSize: '32px', lineHeight: '50px' }}>404 Error</code>
            <br></br>
            <Link to="/">Go back to home</Link>
        </div>
    )
    
}
  
export default Error;