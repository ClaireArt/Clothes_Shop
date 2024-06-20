import React, { memo } from 'react';
import './Admin_Page.css';
import { useNavigate } from 'react-router-dom';
import { convertFileBase64 } from '../../helpers/convertFunction';
import { usePostProductMutation } from '../store/storeSlices/productSlice/newProductApi';
import Products from '../Products/Products';
import { Upload } from '../../icons/icons';

function Admin_Page({ setActiveAdmin }) {
    const navigate = useNavigate();
    const [postProduct, { isError }] = usePostProductMutation();

    const handleClickOut = () => {
        setActiveAdmin(false);
        navigate('/auth/login/admin');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        const convertFile = await convertFileBase64(file)
        const newProduct = {
            imgUrl: convertFile,
            name: e.target[1].value,
            price: e.target[2].value,
            gender: e.target[3].value,
            info: e.target[4].value,
            count: 1
        }

        await postProduct(newProduct)
    }
    return (
        <div className='admin_page'>
            <div className='container'>
                <div className='admin_page_Content'>
                    <h1>Панель Администратора</h1>
                    <div className='log_out' onClick={handleClickOut}>Log Out</div>
                    <form onSubmit={handleSubmit}>
                        <div className="admin_input_container file-input">
                            <input type="file" name="file" id="file-input" className="file-input__input" autoComplete='off' />
                            <label className="file-input__label" htmlFor="file-input">
                                {Upload}
                                <span>Upload file</span>
                            </label>
                        </div>
                        <input type="text" placeholder='Текст' required autoComplete='off' />
                        <input type="text" placeholder='Цена' required autoComplete='off' />
                        <span>Выберите тип</span>
                        <select>
                            <option value='male'>Мужчинам</option>
                            <option value='female'>Женщинам</option>
                        </select>
                        <textarea></textarea>
                        <button>Add Product</button>
                    </form>
                    <div className='add_product_box'>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Admin_Page)