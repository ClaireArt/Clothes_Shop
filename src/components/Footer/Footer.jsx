import React, { memo } from 'react';
import './Footer.css';
import { facebook, instagram, pinterest, tiktok, youtube } from '../../icons/icons';

function Footer() {

    return (
        <footer>
            <div className='container'>
                <div className='footer'>
                    <div className='adress'>
                        <div className='tel_mail'>
                            <div>
                                <h1>T SHOP</h1>
                                <span>info@mysite.ru</span>
                                <span>Тел.: +7 123-456-7890</span>
                            </div>
                        </div>
                        <div className='list'>
                            <div>
                                <h1>За покупками</h1>
                                <span>Новинки</span>
                                <span>Женщинам</span>
                                <span>Мужчинам</span>
                            </div>
                            <div>
                                <h1>Магазин</h1>
                                <span>О нас</span>
                                <span>Подписаться</span>
                                <span>Вопросы и ответы</span>
                            </div>
                            <div>
                                <h1>Условия использования</h1>
                                <span>Политика магазина</span>
                                <span>Доставка и возврат</span>
                                <span>Способы оплаты</span>
                            </div>
                        </div>
                    </div>
                    <div className='mini_footer'>
                        <div className='icons'>
                            <span>{facebook}</span>
                            <span>{instagram}</span>
                            <span>{youtube}</span>
                            <span>{pinterest}</span>
                            <span>{tiktok}</span>
                        </div>
                        <div className='site_create'>
                            <span>© 2035 T SHOP. Сайт создан на</span>
                            <a href="https://ru.wix.com/website-template/view/html/2936?originUrl=https%3A%2F%2Fru.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store&tpClick=view_button&esi=b5ef09e6-3420-4ce1-8d47-554accd469fb" target='_blank'>Wix.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)