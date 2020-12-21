import React from 'react';

import './MainLayout.scss';

const MainLayout = props => {
    return (
        <div className="hero">
            {props.children}
        </div>
    )
}

export default MainLayout;