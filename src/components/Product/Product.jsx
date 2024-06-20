import React, { memo, useMemo } from 'react';
import './Product.css';
import { chevron } from '../../icons/icons';
import {useGetProductsQuery, usePostCartMutation } from '../store/storeSlices/productSlice/newProductApi';
import { useNavigate, useParams } from 'react-router-dom';

function Product() {
    const { data = [], isError, isLoading } = useGetProductsQuery();

    const [postCart] = usePostCartMutation();
    const { id } = useParams();
    const navigate = useNavigate();

    const newProd = useMemo(() => {
        return data.find(prod => prod.id === id)
    }, [data])

    const handleAddCart = () => {
        postCart(newProd)
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <div className='product_unique'>
            <div className='container'>
                <div className='product_unique_Content'>
                    <div className='product_unique_menu'>
                        <div className='product_unique_menu_1'>
                            <span onClick={handleHomeClick}>Главная</span>
                            <span>/</span>
                            <span>Ваш товар</span>
                        </div>
                        <div className='product_unique_menu_2'>
                            <div>
                                <span>{chevron}</span>
                                <span>Назад</span>
                            </div>
                            <span>|</span>
                            <div>
                                <span>Вперед</span>
                                <span style={{ transform: 'rotate(180deg)' }}>{chevron}</span>
                            </div>
                        </div>
                    </div>
                    <div className='product_unique_box'>
                        <div className='product_unique_img'>
                            <div><img src={newProd?.imgUrl} alt="not found" /></div>
                            <p>
                                Это описание товара. чтобы привлечь внимание покупателей.
                                Опишите ваш товар коротко и ясно, Используйте уникальные
                                ключевые слова. Не копируйте чужие тексты — расскажите о
                                товаре своими словами.
                            </p>
                        </div>
                        <div className='product_unique_info'>
                            <h1>{newProd?.name}</h1>
                            <span>Артикул: {newProd?.id}</span>
                            <button onClick={handleAddCart}>Добавить в Корзину</button>
                            <details className="accordion">
                                <summary className="accordion__title">О ТОВАРЕ</summary>
                                <div className="accordion__content">
                                    <p>
                                        Это информация о товаре. Расскажите подробно, что он
                                        из себя представляет, и перечислите всю необходимую информацию:
                                        размеры, материалы, инструкции по уходу и т. д. Это также хорошая
                                        возможность сообщить, в чем особенность вашей продукции и какую выгоду
                                        покупатели получат в итоге.
                                    </p>
                                </div>
                            </details>
                            <div className='border'></div>
                            <details className="accordion">
                                <summary className="accordion__title">ВОЗВРАТ ТОВАРА И ДЕНЕГ</summary>
                                <div className="accordion__content">
                                    <p>
                                        Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно
                                        сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная
                                        политика возврата — это хороший способ построить доверительные отношения с клиентами.
                                    </p>
                                </div>
                            </details>
                            <div className='border'></div>
                            <details className="accordion">
                                <summary className="accordion__title">ДОСТАВКА</summary>
                                <div className="accordion__content">
                                    <p>
                                        Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете,
                                        как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает
                                        доверие клиентов и помогает принять решение купить у вас товар.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Product)