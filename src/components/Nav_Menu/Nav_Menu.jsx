import React, { memo, useState } from 'react';
import Nav_Item from '../Nav_Item/Nav_Item';
import './Nav_Menu.css';
import { basket, user } from '../../icons/icons';
import { useGetCartQuery } from '../store/storeSlices/productSlice/newProductApi';
import { useNavigate } from 'react-router-dom';

function Nav_Menu() {
    const [isActive, setIsActive] = useState(false);
    const { data = [], isError, isLoading } = useGetCartQuery();
    const navigate = useNavigate();

    const handleOpenCartClick = () => {
        navigate('cart')
    }

    // ----------------------burger-----------------------------
    const handleMenuToggle = () => {
        setIsActive(!isActive);
    };

    const handleMenuItemClick = () => {
        setIsActive(false);
    };


    return (
        <div>
            <div className='hidden_burger_menu'>
                {/* -----------------------------burger-icon------------------------------ */}
                <section>
                    <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </section>
                {/* ----------------------------------burger-menu------------------------- */}
                <div className={`nav-burger ${isActive ? 'active' : ''}`}>
                    <nav>
                        <ul className="nav__list">
                            {/* ---------------------------menu-1----------------------------- */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <div className='basket'>
                                    <span>{user}</span>
                                    <span>Войти</span>
                                    <div className='basket_sum_box' onClick={handleOpenCartClick}>
                                        <span> {basket}</span>
                                        <span className='basket_sum'>{data?.length}</span>
                                    </div>
                                </div>
                            </li>
                            {/* -----------------------------menu-2-------------------------- */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='T SHOP' url='/' />
                            </li>
                            {/* ------------------------------menu-3------------------------- */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Новинки' url='new_brand' />
                            </li>
                            {/* ------------------------------menu-4------------------------- */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Женщинам' url='female' />
                            </li>
                            {/* ------------------------------menu-5------------------------- */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Мужчинам' url='male' />
                            </li>
                            {/* ------------------------------------------------------------- */}
                        </ul>
                    </nav>
                </div>
            </div>
            {/* ---------------------------------------------------------------------- */}
            <ul className='nav_menu'>
                <Nav_Item txt='T SHOP' url='/' />
                <div></div>
                <Nav_Item txt='Новинки' url='new_brand' />
                <Nav_Item txt='Женщинам' url='female' />
                <Nav_Item txt='Мужчинам' url='male' />
                <div className='basket'>
                    <span>{user}</span>
                    <span>Войти</span>
                    <div className='basket_sum_box' onClick={handleOpenCartClick}>
                        <span> {basket}</span>
                        <span className='basket_sum'>{data?.length}</span>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default memo(Nav_Menu)