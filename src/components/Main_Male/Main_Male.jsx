import React, { memo, useMemo } from 'react';
import './Main_Male.css';
import Logo from '../Logo/Logo';
import { useGetProductsQuery } from '../store/storeSlices/productSlice/newProductApi';
import Product_Item from '../Product_Item/Product_Item';

function Main_Male() {
  const { data = [], isError, isLoading } = useGetProductsQuery();

  const newProduct = useMemo(() => {
    return [
      ...data.filter(prod => prod.gender === 'male')
    ]
  }, [data]);

  return (
    <div className='male_shop_products'>
      <div className='container'>
        <div className='male_shop_products_Content'>
          <Logo logo={'Мужчинам'}/>
          <div>
            {
              newProduct &&
              newProduct.map((male, index) => (
                <Product_Item key={index} prod={male} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Main_Male)