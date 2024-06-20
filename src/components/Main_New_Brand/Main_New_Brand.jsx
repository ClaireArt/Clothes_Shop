import React, { memo } from 'react';
import './Main_New_Brand.css';
import Products from '../Products/Products';
import Logo from '../Logo/Logo';

function Main_New_Brand() {

  return (
    <div className='new_brand_shop_products'>
      <div className='container'>
        <div className='new_brand_shop_products_Content'>
          <Logo logo={'Новинки'} />
          <div>
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Main_New_Brand)