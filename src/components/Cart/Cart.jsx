import React, { memo, useState } from 'react';
import './Cart.css';
import { useCheckCountMutation, useDelCartMutation, useGetCartQuery } from '../store/storeSlices/productSlice/newProductApi';
import Logo from '../Logo/Logo';

function Cart() {
    const { data = [], isError, isLoading } = useGetCartQuery();
    const [delCart] = useDelCartMutation();
    const [checkCount] = useCheckCountMutation();

    console.log(data, 'cart');

    const handleDelClick = async (id) => {
        await delCart(id)
    }

    const handleCountChange = async (e, prod) => {
        const newBody = {
            ...prod,
            count: e.target.value,
        }
        checkCount(newBody)
    }

    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart_Container'>
                    <Logo logo={'Корзина'} />
                    <div className='cart_box'>
                        {
                            data &&
                            data.map((prod, index) => (
                                <div key={index} className='cart_item'>
                                    <div className='cart_item_img'><img src={prod.imgUrl} alt="not found" /></div>
                                    <div className='cart_item_info'>
                                        <span>{prod.name}</span>
                                        <span>{prod.price} &#8381;</span>
                                        <span>{Number(prod.count) * Number(prod.price)} &#8381;</span>
                                        <input type="number" min='1' defaultValue={prod.count} onChange={(e) => handleCountChange(e, prod)} />
                                        <button onClick={() => handleDelClick(prod.id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>Sum: {data.reduce((acc, el)=> acc + el.count*(+el.price), 0)} </span>
                </div>
            </div>
        </div>
    )
}

export default memo(Cart)