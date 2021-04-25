import React from 'react';

import styles from './Toolbar.module.css';

import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <NavigationItem/>
    </header>
);

export default toolbar;