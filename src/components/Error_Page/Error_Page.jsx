import React, { memo } from 'react';
import './Error_Page.css';
import { Error_Rabbit } from '../../images/images';

function Error_Page() {
    return (
        <div className='error_page'>
            <div className='container'>
                <div className='error_page_Content'>
                    <div><img src={Error_Rabbit} alt="not found" /></div>
                </div>
            </div>
        </div>
    )
}

export default memo(Error_Page)