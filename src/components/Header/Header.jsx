import React, { memo } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div className='sale'>Скидка 25% на все товары по промокоду TEES25</div>
                    <div className='nav_section'>
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)