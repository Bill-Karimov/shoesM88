import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Warranty.module.css';

const Warranty = () => {
    return (
        <>
            <Head>
                <title>Гарантия | M88 - Онлайн Магазин Женской обуви в Ташкенте</title>
            </Head>
            <main className='main'>
                <div className='imgContainer'>
                    <Image src='/img/warranty-title-img.jpg' priority={true} layout='fill' objectFit='cover' objectPosition='center 98%' alt='Delivery' />
                </div>
                <div className='container'>
                    <div className={styles.warrantyContent}>
                        <h1 className={styles.title}>
                            Гарантия
                        </h1>
                        <p className={styles.subTitle}>
                            Уверенность в каждой покупке!
                        </p>
                        <div className={styles.warrantyWrapper}>
                            <div className={styles.warrantyImgContainer}>
                                <div className={styles.warrantyImg}>
                                    <Image src='/img/warranty-material.jpg' layout='fill' objectFit='cover' />
                                </div>
                                <p>Превосходство основного материала</p>
                            </div>
                            <div className={styles.warrantyImgContainer}>
                                <div className={styles.warrantyImg}>
                                    <Image src='/img/warranty-sole.jpg' layout='fill' objectFit='cover' />
                                </div>
                                <p>Надежность обувной подошвы</p>
                            </div>
                            <div className={styles.warrantyImgContainer}>
                                <div className={styles.warrantyImg}>
                                    <Image src='/img/warranty-thread.jpg' layout='fill' objectFit='cover' />
                                </div>
                                <p>Целостность ниточных швов</p>
                            </div>
                            <div className={styles.warrantyImgContainer}>
                                <div className={styles.warrantyImg}>
                                    <Image src='/img/warranty-zip.jpg' layout='fill' objectFit='cover' />
                                </div>
                                <p>Качественные застежки-молнии</p>
                            </div>
                        </div>
                        
                        <div className={styles.warrantyContainer}>
                            <div className={styles.warrantyTitle}>
                                <h3>При обнаружении дефекта</h3>
                            </div>
                            <div>
                                <p>
                                    Мы предоставляем лучший сервис с непревзойденным качеством, а также даём гарантию на все наши коллекции. 
                                    При обнаружении дефекта на приобретенном обуви Вы можете прийти в один из наших филиалов или отправить нам фото обуви через любой канал связи - 
                                    Инстаграм или Телеграм. Далее наш консультант обменяет вам обувь или вернет Вам деньги за товар
                                </p>
                            </div>
                        </div>

                        <div className={styles.warrantyContainer}>
                            <div className={styles.warrantyTitle}>
                                <h3>Требования к обуви</h3>
                            </div>
                            <div>
                                <p>
                                    Возвращаемая обувь должна предоставляться вместе с чеком в чистом и в сухом виде. 
                                    Также обувь, бывавшая в ремонте, к возврату и обмену не подлежит!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Warranty;
