import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const layout = (props) => {
    return <>
        <Toolbar/>
        <div className={styles.Content}>
            Toolbar, Sidebar, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </>
};

export default layout;