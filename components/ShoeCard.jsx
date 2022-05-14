import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/ShoesOwlList.module.css';
import { COLLECTIONS_ROUTE } from '../utils/consts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

export default function ShoeCard({ products }) {

  return (
    <>
      <div className={styles.shoeImg}>
        <Swiper 
            loop={true}
            autoplay={{
              delay: 7000,
            }}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={20}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              // window width is >= 998px
              998: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1180: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className='mySwiper'
          >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={COLLECTIONS_ROUTE + item['permalink']}>
                <a title='Посмотреть'>
                    <div className={styles.collImage}>
                      <Image src={item['img']} layout='fill' objectFit='cover' alt={item['alt']} />
                    </div>
                    <p className={styles.collTitle}>{item['name']}</p>
                    <p className={styles.collPrice}>{item['price'].toLocaleString()} UZS</p>
                </a>
              </Link>
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
    </>
  );
};