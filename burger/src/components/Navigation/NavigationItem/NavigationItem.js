import React from 'react';

import styles from './NavigationItem.module.css';

const navigationItems = (props) => (
    <ul className={styles.NavigationItem}>
        <li className={styles.NavigationLI}><a href="/">Hello</a></li>
    </ul>
);

export default navigationItems;