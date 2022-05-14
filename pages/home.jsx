import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { COLLECTIONS_ROUTE } from '../utils/consts';

import styles from '../styles/Home.module.css';
import ShoesOwlList from '../components/ShoesOwlList';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = ({ newProducts, popularProducts }) => {
    console.log(newProducts);

    // main slider images
    const sliderImages = [
        {
            'path': COLLECTIONS_ROUTE,
            'img': '/img/slider-img-1.jpg',
            'alt': 'Spring colors',
        },
        {
            'path': COLLECTIONS_ROUTE,
            'img': '/img/slider-img-2.jpg',
            'alt': 'New summer collections',
        },
        {
            'path': COLLECTIONS_ROUTE,
            'img': '/img/slider-img-3.jpg',
            'alt': 'Colorful shoes design',
        },
    ];

    return (
        <>
            <Head>
                <title>M88 | Онлайн Магазин Женской обуви в Ташкенте</title>
            </Head>

            <main className='main'>
                <section className={styles.sliderContainer}>
                    <div className={styles.wrapper}>
                        <Swiper 
                            loop={true}
                            effect={"fade"}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                              }}
                            navigation={true}
                            modules={[EffectFade, Autoplay, Navigation]}
                            className='myMainSwiper'
                        >
                        {sliderImages.map((item, i) => (
                            <SwiperSlide key={`slide-${i}`}>
                                <div className={styles.imgContainer}>
                                    <Link href={item['path']}>
                                        <a>
                                            <Image src={item['img']} priority={true} layout='fill' objectFit='cover' alt={item['alt']} />
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))} 
                        </Swiper>
                    </div>
                </section>
                <section className='container'>

                    <ShoesOwlList title={'Новые модели'} link={'/collections?sort=new'} products={newProducts} />

                    <div className={styles.category}>
                        <div className={styles.categoryContent}>
                            <Link href='/collections?sort=summer'>
                                <a>
                                    <h2 className={styles.title}>Летняя коллекция</h2>
                                    <div className={styles.imgCategory}>
                                        <Image src='/img/summer-coll.jpg' layout='fill' objectFit='cover' alt='' />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.categoryContent}>
                            <Link href='/collections?sort=winter'>
                                <a>
                                    <h2 className={styles.title}>Зимняя коллекция</h2>
                                    <div className={styles.imgCategory}>
                                        <Image src='/img/winter-сoll.jpg' layout='fill' objectFit='cover' alt='' />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <ShoesOwlList title={'Популярные модели'} link={'/collections?sort=popular'} products={popularProducts} />

                </section>
            </main>
        </>
    )
}

export default Home;