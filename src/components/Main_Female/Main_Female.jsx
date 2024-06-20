import React, { memo, useMemo } from 'react';
import './Main_Female.css';
import { useGetProductsQuery } from '../store/storeSlices/productSlice/newProductApi';
import Product_Item from '../Product_Item/Product_Item';
import Logo from '../Logo/Logo';

function Main_Female() {
  const { data = [], isError, isLoading } = useGetProductsQuery();

  const newProduct = useMemo(() => {
    return [
      ...data.filter(prod => prod.gender === 'female')
    ]
  }, [data]);


  return (
    <div className='female_shop_products'>
      <div className='container'>
        <div className='female_shop_products_Content'>
          <Logo logo={'Женщинам'}/>
          <div>
            {
              newProduct &&
              newProduct.map((female,index) => (
                <Product_Item key={index} prod={female} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Main_Female)