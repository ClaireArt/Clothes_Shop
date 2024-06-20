import React, { memo } from 'react';
import './Products.css';
import { useGetProductsQuery } from '../store/storeSlices/productSlice/newProductApi';
import Product_Item from '../Product_Item/Product_Item';

function Products() {
    const { data = [], isError, isLoading } = useGetProductsQuery()

    return (
        <div className='admin_products_list_box'>
            {
                isLoading ? <h1>Loading...</h1> :
                    data &&
                    data.map((prod, index) => (
                        <Product_Item key={index} prod={prod} />
                    ))
            }
        </div>
    )
}

export default memo(Products)