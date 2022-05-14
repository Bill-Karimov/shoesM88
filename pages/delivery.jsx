import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Delivery.module.css';

const Delivery = () => {
  return (
    <>
        <Head>
            <title>Доставка | M88 - Онлайн Магазин Женской обуви в Ташкенте</title>
        </Head>
        <main className='main'>
            <div className='imgContainer'>
                <Image src='/img/delivery-title-img.jpg' priority={true} layout='fill' objectFit='cover' alt='Delivery' />
            </div>
            <div className='container'>
                <div className={styles.deliveryContent}>
                    <h1 className={styles.title}>
                        Доставка
                    </h1>
                    <p className={styles.subTitle}>
                        Еще не была настолько быстрой и удобной!
                    </p>
                    <div className={styles.deliveryContainer}>
                        <div className={styles.deliveryTitle}>
                            <h3>Оформление</h3>
                        </div>
                        <div>
                            <p>
                                После оформления заказа с Вами свяжется наш менеджер по контактным данным которые Вы указали при оформлении заказа. Это нужно для согласования сроков доставки, а также уточнить детали заказа.
                            </p>
                            <p className={styles.deliveryInfoTitle}>
                                Условие доставки
                            </p>
                            <p>
                                Обувной Магазин на дому! При заказе обуви Вы сможете выбрать неограниченное количество моделей для примерки на дому, а также несколько размеров.
                            </p>
                            <p className={styles.deliveryInfoTitle}>
                                Доставка в регионы
                            </p>
                            <p>
                                К сожалению, на данный момент у нас отсутвует доставка купленного товара по регионам Узбекистана. Подписывайтесь на наши соц. сети и следите за обновлениями, чтобы быть в курсе наших новостей!
                            </p>
                        </div>
                    </div>
                    <div className={styles.deliveryContainer}>
                        <div className={styles.deliveryTitle}>
                            <h3>Примерка</h3>
                        </div>
                        <div>
                            <p>
                                Заказывая доставку, наслаждайтесь примеркой обуви с Вашими любимыми образами!
                            </p>
                            <p>
                                Также Вы имеете полное право отказаться от заказанного товара в момент доставки.
                            </p><br/>
                            <p>
                                Вы имеете полное право отказаться от заказанного товара в момент доставки. При оформлении заказа до 15.00 и после подтверждения менеджером - доставка осуществляется в этот же день. При оформлении заказа позже 15.00 - доставка осуществляется на следующий день.
                            </p>
                        </div>
                    </div>
                    <div className={styles.deliveryContainer}>
                        <div className={styles.deliveryTitle}>
                            <h3>Возврат и обмен</h3>
                        </div>
                        <div>
                            <p>
                                При обмене/возврате товара надлежащего качества - доставка 20 000 сум
                            </p>
                            <p>
                                При обмене/возврате товара ненадлежащего качество (производственный брак) - доставка бесплатная.
                            </p>
                        </div>
                    </div>
                    <div className={styles.deliveryContainer}>
                        <div className={styles.deliveryTitle}>
                            <h3>Способы оплаты</h3>
                        </div>
                        <div>
                            <p>Наличными, нашему курьеру после получения и примерки товара</p>
                            <p>Оплата с сайта платежными системами Uzcard, HUMO, Viza, Mastercard, Payme</p>
                            <p>Оплата в приложениях Payme или Click</p>
                            <p>Рассрочка от ZoodPay - рассрочка в 4 равных платежах</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  );
};

export default Delivery;
