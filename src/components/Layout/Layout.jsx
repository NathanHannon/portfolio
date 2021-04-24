import React from 'react';
import NavMenu from '../NavMenu';
import './Layout.css'

const layout = (props) => (
    <div>
        <NavMenu />
        <main className='Content'>
            {props.children}
        </main>
    </div>
);
export default layout;