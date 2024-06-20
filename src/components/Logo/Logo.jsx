import React, { memo } from 'react';
import './Logo.css';
import { useLocation } from 'react-router-dom';

function Logo({logo}) {
  const { pathname } = useLocation();

  return (
    <div className='logo'>
      <div className='logo_Content'>
        <h1>{logo}</h1>
      </div>
    </div>
  )
}

export default memo(Logo)