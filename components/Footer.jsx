import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Footer.module.css';
import { INSTALLMENT_PLAN_ROUTE, ADDRESS_ROUTE, DELIVERY_ROUTE, WARRANTY_ROUTE, 
    INSTAGRAM_ROUTE, FACEBOOK_ROUTE, TELEGRAM_ROUTE, POLICY_ROUTE } from '../utils/consts';

export default function Footer() {
    var newDate = new Date();
    var year = newDate.getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className='container'>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogoContent}>
                            <Link href='/'>
                                <a>
                                    <div className={styles.footerLogo}>
                                        <Image src='/img/logo.png' layout='fill' />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.footerNavContent}>
                            <h2>Женская обувь в Ташкенте. Большой ассортимент качественной обуви по доступным ценам!</h2>
                            <div className={styles.footerNavGroup}>
                                <div className={styles.navGroup}>
                                    <label htmlFor='address'>Адрес</label>
                                    <ul id="address">
                                        <li>
                                            <Link href={ADDRESS_ROUTE}><a>
                                                Чиланзарский рынок "АБУ-САХИЙ", проспект БУНЁДКОР, 999A
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.navGroup}>
                                    <label htmlFor='info'>Информация</label>
                                    <ul id="info">
                                        <li>
                                            <Link href={INSTALLMENT_PLAN_ROUTE}><a>
                                                Рассрочка
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href={DELIVERY_ROUTE}><a>
                                                Доставка и возврат
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href={WARRANTY_ROUTE}><a>
                                                Гарантия качества
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.navGroup}>
                                    <label htmlFor='contacts'>Контакты</label>
                                    <ul id="contacts">
                                        <li>
                                            <Link href='tel:99898361100'><a>
                                                +998 98 361 10 08
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href='tel:998900090885'><a>
                                                +998 90 009 08 85
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.navGroup}>
                                    <label htmlFor='social'>Соц. сети</label>
                                    <ul id="social">
                                        <li>
                                            <Link href={INSTAGRAM_ROUTE}><a target='_blank' rel='noopener noreferrer'>
                                                Instagram
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href={FACEBOOK_ROUTE}><a target='_blank' rel='noopener noreferrer'>
                                                Facebook
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href={TELEGRAM_ROUTE}><a target='_blank' rel='noopener noreferrer'>
                                                Telegram
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.copyrightGroup}>
                    <div>© {year} M88</div>
                    <div className={styles.payGroup}>
                        <span className={styles.payGroupImg}><Image src='/img/click.png' width='46' height='18' objectFit='contain' title='Click' /></span>
                        <span className={styles.payGroupImg}><Image src='/img/humo.png' width='46' height='18' objectFit='contain' title='Humo' /></span>
                        <span className={styles.payGroupImg}><Image src='/img/payme.png' width='46' height='18' objectFit='contain' title='Payme' /></span>
                        <span className={styles.payGroupImg}><Image src='/img/visa.png' width='34' height='18' objectFit='contain' title='Visa' /></span>
                        <span className={styles.payGroupImg}><Image src='/img/master.png' width='46' height='18' objectFit='contain' title='Master Card' /></span>
                    </div>
                    <div>
                        <Link href={POLICY_ROUTE}>
                            <a style={{fontSize: 10+'px'}}>
                                Политика конфиденциальности
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};