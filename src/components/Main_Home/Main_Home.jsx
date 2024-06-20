import React, { memo } from 'react';
import './Main_Home.css';
import { arrow, sale } from '../../icons/icons';
import { T_Shop, female, male, woman } from '../../images/images';
import Products from '../Products/Products';
import { useNavigate } from 'react-router-dom';

function Main_Home() {
    const navigate = useNavigate();

    const handleOpenNewBrandClick = () => {
        navigate('new_brand')
    }

    const handleOpenFemaleClick = () => {
        navigate('female')
    }

    const handleOpenMaleClick = () => {
        navigate('male')
    }

    return (
        <div className='main_Home'>
            <div className='container'>
                <div className="main_Home_Content">
                    <div className='table_of_contents'>
                        <h1>T SHOP</h1>
                        <span>​Для каждого найдется своя</span>
                    </div>
                    <div className='image_box'>
                        <div className='female product' onClick={handleOpenFemaleClick}>
                            <img src={female} alt="not found" />
                            <span>Товары для Женщин</span>
                        </div>
                        <div className='t_shop product' onClick={handleOpenNewBrandClick}>
                            <img src={T_Shop} alt="not found" />
                            <span>Новинки</span>
                        </div>
                        <div className='male product' onClick={handleOpenMaleClick}>
                            <img src={male} alt="not found" />
                            <span>Товары для Мужчин</span>
                        </div>
                    </div>
                    {/* -------------------------------------DATA----------------------------------- */}
                    <div className='home_shop_products'>
                        <h1>Новинки</h1>
                        <div>
                            <Products />
                        </div>
                        <button onClick={handleOpenNewBrandClick}>За покупками</button>
                    </div>
                    {/* ------------------------------------------------------------------------ */}
                    <div className='sale_info_box'>
                        <div className='sale_info'>
                            <div>
                                <span>{sale}</span>
                                <span>СКИДКИ НАЧАЛИСЬ!</span>
                                <span className='sale_number'>- 25%</span>
                                <span>Скидка 25% на все товары по промокоду TEES25</span>
                            </div>
                        </div>
                        <div className='sale_image'>
                            <img src={woman} alt="not found" />
                        </div>
                    </div>
                    <div className='sale_box'>
                        <span>{arrow}</span>
                        <h1>СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ!</h1>
                        <span>{arrow}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Main_Home)