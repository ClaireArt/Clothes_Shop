import React, { memo } from 'react';
import './Product_Item.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDelAdminProductMutation } from '../store/storeSlices/productSlice/newProductApi';

function Product_Item({ prod }) {
    const { pathname } = useLocation();
    const [delAdminProduct] = useDelAdminProductMutation();
    const navigate = useNavigate();

    const handleDelClick = async (id) => {
        await delAdminProduct(id)
    }

    const handleItemClick = () => {
        if (pathname !== '/auth/admin') {
            navigate(`/${prod.gender}/${prod.id}`);
        }
    }

    return (
        <div key={prod?.id} className='admin_product' onClick={handleItemClick}>
            {pathname === '/auth/admin' && <span onClick={() => handleDelClick(prod.id)} style={{ color: 'red' }} className='delete_admin_item'>X</span>}
            <div><img src={prod?.imgUrl} /></div>
            <span>{prod?.name}</span>
            <span>{prod?.price} &#8381;</span>
        </div>
    )
}

export default memo(Product_Item)