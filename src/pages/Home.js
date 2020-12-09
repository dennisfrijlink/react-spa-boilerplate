import React from 'react';
import '../assets/css/flexboxgrid.css';
import './Home.scss';

const Home = () => {
    return (
        <div className="columns">
            <div className="column is-one-third red">Red</div>
            <div className="column blue">blue</div>
        </div>
    )
}
  
export default Home;