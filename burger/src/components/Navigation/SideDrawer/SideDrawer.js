import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';

import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItem/>
            </nav>
        </div>
    );
};

export default sideDrawer;