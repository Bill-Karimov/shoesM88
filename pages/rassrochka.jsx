import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Rassrochka.module.css';

const Rassrochka = () => {
    return (
        <>
            <Head>
                <title>Рассрочка | M88 - Онлайн Магазин Женской обуви в Ташкенте</title>
            </Head>
            <main className='main'>
                <div className='imgContainer'>
                    <Image src='/img/rassrochka-title-img.jpg' priority={true} layout='fill' objectFit='cover' alt='Rassrochka Installment Plan' />
                </div>
                <div className='container'>
                    <div className={styles.rassrochkaContent}>
                        <h1 className={styles.title}>
                            Рассрочка
                        </h1>
                        <p className={styles.subTitle}>
                            Оплата в рассрочку четырьмя равными платежами
                        </p>
                        <div className={styles.rassrochkaContainer}>
                            <div className={styles.rassrochkaTitle}>
                                <h3>ZOODPAY</h3>
                            </div>
                            <div className={styles.rassrochkaInfo}>
                                <p className={styles.rassrochkaInfoTitle}>
                                    Воспользуйтесь "Рассрочка ZoodPay" в качестве способа оплаты.
                                </p>
                                <p>
                                    Добавьте нужные товары в корзину и выберите ZoodPay "Рассрочка ZoodPay" в качестве способа оплаты при оформлении заказа.
                                    Вы должны быть старше 18 лет и быть авторизованным владельцем активной банковской карты с действительным сроком действия не менее 3 месяцев.
                                </p>
                                <p className={styles.rassrochkaInfoTitle}>
                                    Получите мгновенное одобрение.
                                </p>
                                <p>
                                    Введите персональную информацию и узнайте, одобрен ли Ваш заказ мгновенно.
                                    ZoodPay произведет запросы внешним партнерам на проверку Вашей кредитоспособности.
                                    В случае получения одобрения на покупку, с вашей карты будет списан первый из четырёх платежей по рассрочке.
                                    В случае, если ваша заявка не будет одобрена, вам так же поступит уведомление об отказе в предоставлении рассрочки.
                                </p>
                                <p className={styles.rassrochkaInfoTitle}>
                                    Зарегистрируйте данные своей банковской карты и оплатите заказ в 4 равных платежах:
                                </p>
                                <ul>
                                    <li><p>1-ая оплата в момент покупки</p></li>
                                    <li><p>2-ая оплата через 30 дней после покупки</p></li>
                                    <li><p>3-ая оплата через 60 дней после покупки</p></li>
                                    <li><p>4-ая оплата через 90 дней после покупки</p></li>
                                </ul>
                                <p className={styles.rassrochkaInfoTitle}>
                                    Мы предусмотрели для наших клиентов всё, чтобы сделать процедуру покупки максимально простой и доступной!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Rassrochka;
