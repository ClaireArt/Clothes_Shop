import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Item.css';

function Nav_Item({ txt, url }) {
    return (
        <NavLink to={url} className={txt === 'T SHOP' ? 'active-link' : 'inactive-link'}>{txt}</NavLink>
    )
}

export default memo(Nav_Item)