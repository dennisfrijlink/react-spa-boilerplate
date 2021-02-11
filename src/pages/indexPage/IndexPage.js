import React from 'react';

import styles from './IndexPage.module.scss'

import AppLogo from '../../components/ui/AppLogo'

const IndexPage = () => {
    return (
        <div className={styles.heroLogo}>
            <AppLogo/>
            <h1 className={styles.heroHeader}>React.js <span>Single Page Application</span> Boilerplate</h1>
        </div>
    )
}

export default IndexPage;