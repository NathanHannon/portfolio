import React from 'react';
import NavMenu from '../containers/NavMenu'

const layout = (props) => (
    <div>
        <NavMenu />
        <main>
            {props.children}
        </main>
    </div>
);
export default layout;