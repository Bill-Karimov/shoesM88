import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Header.module.css';
import { COLLECTIONS_ROUTE, INSTALLMENT_PLAN_ROUTE, DELIVERY_ROUTE, 
    WARRANTY_ROUTE, CONTACTS_ROUTE } from '../utils/consts';
import dynamic from 'next/dynamic';

export default function Header() {

    const menuLinks = [
        {
            'text': 'Коллекции',
            'link': COLLECTIONS_ROUTE,
        },
        {
            'text': 'Рассрочка',
            'link': INSTALLMENT_PLAN_ROUTE,
        },
        {
            'text': 'Доставка',
            'link': DELIVERY_ROUTE,
        },
        {
            'text': 'Гарантия',
            'link': WARRANTY_ROUTE,
        },
        {
            'text': 'Контакты',
            'link': CONTACTS_ROUTE,
        },
    ]

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const openMenu = () => {
        if (isSearchOpen == true || setIsSearchOpen == true) {
            setIsSearchOpen(!isSearchOpen);
        }
        var body = document.body;
        body.classList.toggle('active');
        setIsOpen(!isOpen);
    };

    const hide = () => {
        var body = document.body;
        body.classList.remove('active');
        setIsOpen(!isOpen);
    };

    const openCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const openSearch = () => {
        if (isOpen == true || setIsOpen == true) {
            var body = document.body;
            body.classList.remove('active');
            setIsOpen(!isOpen);
        }
        setIsSearchOpen(!isSearchOpen);
    };

    const closeCart = () => {
        var cartContainer = document.getElementById('cartContainer');
        cartContainer.classList.remove(styles.open);
        setIsCartOpen(!isCartOpen);
    };

    // TODO: make it dynamic
    const cartItems = null;
    const cartCount = [
        {'id': 1},
        {'id': 2},
        {'id': 3},
    ]; 

    return <>
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <Link href="/">
                            <a className={styles.logo}>
                                <Image src="/img/logo.png" alt="" width="90" height="30" />
                            </a>
                        </Link>
                    </div>
                    <nav className={isOpen === false ? styles.item : styles.item + ' ' + styles.active}>
                        {
                            menuLinks.map((item, i) => (
                                <Link href={item['link']} key={i}>
                                    <a className={router.pathname === item['link'] ? styles.itemLink + ' ' + styles.activeLink : styles.itemLink} onClick={hide}>
                                        {item['text']}
                                    </a>
                                </Link>
                            ))
                        }
                    </nav>
                    <div className={styles.item}>
                        <div className={styles.searchIcon} onClick={openSearch} title='Поиск'>
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.2224" cy="11.9411" r="10.3125" transform="rotate(-45 12.2224 11.9411)" stroke="black" strokeWidth="2"/>
                                <path d="M19.8457 19.5646L26.8063 26.5252" stroke="black" strokeWidth="2"/>
                            </svg>
                        </div>
                        {/* 
                            <div className={styles.loginIcon} title='Логин'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="6" r="5.1" stroke="black" strokeWidth="1.8"/>
                                <path d="M20.3998 20.2438C20.7539 21.1556 20.9766 22.1187 21.0613 23.1L2.93873 23.1C3.02338 22.1187 3.24609 21.1556 3.60017 20.2438C4.06198 19.0546 4.7375 17.9776 5.58552 17.0731C6.43342 16.1686 7.43685 15.4545 8.53689 14.9685C9.63675 14.4825 10.8133 14.2333 12 14.2333C13.1867 14.2333 14.3632 14.4825 15.4631 14.9685C16.5631 15.4545 17.5666 16.1686 18.4145 17.0731C19.2625 17.9776 19.938 19.0546 20.3998 20.2438Z" stroke="black" strokeWidth="1.8"/>
                            </svg>
                            </div> 
                        */}
                        <div className={styles.cartIcon} onClick={openCart} title='Корзина'>
                            <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.0625" y="9.08482" width="24.125" height="16.6964" stroke="black" strokeWidth="2"/>
                                <path d="M19.6161 7.68303V9.06696H7.5625V7.68303C7.5625 4.35453 10.2608 1.65625 13.5893 1.65625C16.9178 1.65625 19.6161 4.35453 19.6161 7.68303Z" stroke="black" strokeWidth="2"/>
                            </svg>
                            <div className={styles.cartCounter}>{cartCount.length}</div>
                        </div>
                        <div className={isOpen === false ? styles.burger : styles.burger + ' ' + styles.active} onClick={openMenu}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Search Field */} 
        <div id='searchContainer' className={isSearchOpen === false ? styles.searchContainer : styles.searchContainer + ' ' + styles.openSearch}>
            <div className='container'>
                <form action='' method='GET'>
                    <input type="text" name='search' className={styles.searchInput} placeholder='Поиск...'/>
                    <input type="button" className={styles.searchBtn} value={'Найти'}/>
                </form>
            </div>                
        </div>

        {/* Cart Section */}
        <div id='cartContainer' className={isCartOpen === false ? styles.cartContainer : styles.cartContainer + ' ' + styles.open}>
            <div className={styles.cartHeader}>
                <div className={styles.cartClose} onClick={closeCart}>
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1V27" stroke="black" strokeLinecap="round"/>
                    <path d="M1 14L27 14" stroke="black" strokeLinecap="round"/>
                </svg>
                </div>
                <div className={styles.cartTitle}>
                    Корзина
                </div>
            </div>
            <div className={styles.cartContent}>
                <div>
                <svg width="22" height="25" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="7.5" width="23" height="19" stroke="black"/>
                    <path d="M17.5 6V7.5H6.5V6C6.5 2.96243 8.96243 0.5 12 0.5C15.0376 0.5 17.5 2.96243 17.5 6Z" stroke="black"/>
                </svg>
                {
                cartItems !== null
                ? 
                <div className={styles.cartItem}>
                    {cartItems()} TODO: make this loop
                </div>
                :
                <>
                <div className={styles.cartItem}>
                    <div className={styles.cartIcon}>

                    </div>
                    <p className={styles.cartInfo}>
                        В вашей корзине нет товара
                    </p>
                </div>
                </>
                }
                </div>
            </div>
            <button className={styles.cartBtn} >Начать покупки</button>
        </div>
    </>
};