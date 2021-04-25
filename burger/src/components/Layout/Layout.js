import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return <>
        <Toolbar/>
        <SideDrawer/>
        <div className={styles.Content}>
            Toolbar, Sidebar, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </>
};

export default layout;