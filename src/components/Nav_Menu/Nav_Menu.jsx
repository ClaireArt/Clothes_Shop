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
        navigate('cart');
    };

    // Handle burger menu toggle
    const handleMenuToggle = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleMenuItemClick = () => {
        setIsActive(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <div>
            <div className='hidden_burger_menu'>
                {/* Burger Icon */}
                <section>
                    <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </section>
                {/* Burger Menu */}
                <div className={`nav-burger ${isActive ? 'active' : ''}`}>
                    <nav>
                        <ul className="nav__list">
                            {/* Menu Item 1 */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <div className='basket'>
                                    <span>{user}</span>
                                    <span>Войти</span>
                                    <div className='basket_sum_box' onClick={handleOpenCartClick}>
                                        <span>{basket}</span>
                                        <span className='basket_sum'>{data?.length}</span>
                                    </div>
                                </div>
                            </li>
                            {/* Menu Item 2 */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='T SHOP' url='/' />
                            </li>
                            {/* Menu Item 3 */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Новинки' url='new_brand' />
                            </li>
                            {/* Menu Item 4 */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Женщинам' url='female' />
                            </li>
                            {/* Menu Item 5 */}
                            <li className="nav__list_item" onClick={handleMenuItemClick}>
                                <Nav_Item txt='Мужчинам' url='male' />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Main Navigation */}
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
                        <span>{basket}</span>
                        <span className='basket_sum'>{data?.length}</span>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default memo(Nav_Menu);
