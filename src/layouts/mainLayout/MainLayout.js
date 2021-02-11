import React from 'react';

import styles from './MainLayout.module.scss';

const MainLayout = props => {
    return (
        <div className={styles.hero}>
            {props.children}
        </div>
    )
}

export default MainLayout;