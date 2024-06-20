import React, { memo } from 'react';
import Nav_Menu from '../Nav_Menu/Nav_Menu';
import './Nav.css';

function Nav() {
    return (
        <div className='container'>
            <div className='nav'>
                <Nav_Menu />
            </div>
        </div>
    )
}

export default memo(Nav)