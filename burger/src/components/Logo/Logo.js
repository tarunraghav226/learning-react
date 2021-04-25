import React from 'react';

import burgerLogo from '../../assests/images/logo.png'
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="Logo"/>
    </div>
);

export default logo;