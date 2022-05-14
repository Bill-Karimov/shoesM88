import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Collections.module.css';
import styleslist from '../../styles/ShoesOwlList.module.css';
import { COLLECTIONS_ROUTE } from '../../utils/consts';
import { getAllProducts } from '../../lib/productStore';

export const getServerSideProps = async () => {
  const allProducts = await getAllProducts();
  return {
    props: {
      allProducts,
    },
  };
};

// Temp value for filter
const filterCollection = [{
  'title': 'Коллекция',
  'items': [
    {'id': 'spring', 'name': 'Весна'},
    {'id': 'summer', 'name': 'Лето'},
    {'id': 'autumn', 'name': 'Осень'},
    {'id': 'winter', 'name': 'Зима'},
  ]
}];

const filterCategory = [{
  'title': 'Категория',
  'items' : [
    {'id': 'sneakers', 'name': 'Кроссовки'},
    {'id': 'loafers', 'name': 'Лоферы'},
    {'id': 'shoes', 'name': 'Туфли'},
    {'id': 'moccasins', 'name': 'Мокасины'},
    {'id': 'ballet', 'name': 'Балетки'},
  ]
}];

const filterSize = [{
  'title': 'Размер',
  'items': [34,35,36,37,38,39,40,41,42]
}]

const filterColor = [{
  'title': 'Цвет',
  'items': [
    {'id': 'black', 'name': 'Черный', 'color': '#000'},
    {'id': 'red', 'name': 'Красный', 'color': '#f00'},
    {'id': 'yellow', 'name': 'Желтый', 'color': '#ff0'},
  ]
}]

const Collections = ({ allProducts }) => {
  return (
    <main className={styles.main}>
      <div className='container'>
        <h3 className={styles.title}>Все модели</h3>
        <div className={styles.collWrapper}>
          <div className={styles.collContent}>
            <div className={styles.collCardWrapper}>
              {allProducts.map((item, i) => (
                <div className={styles.collCardProduct} key={i}>
                  <Link href={COLLECTIONS_ROUTE + item['permalink']}>
                    <a title='Посмотреть'>
                      <div className={styleslist.collImage}>
                        <Image src={item['img']} layout='fill' objectFit='cover' alt={item['alt']} />
                      </div>
                      <p className={styleslist.collTitle}>{item['name']}</p>
                      <p className={styleslist.collPrice}>{item['price'].toLocaleString()} UZS</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.collFilter}>
            <form action='' method='GET'>
              <div className={styles.filter}>
                <div className={styles.filterContainer}>
                  {
                    /** Filter Collection */
                    filterCollection.map((item, i) => (
                      <div className={styles.filterCategory} key={i}>
                        <p className={styles.filterTitle}>{item['title']}</p>
                        <ul>
                        {
                          item.items.map((item, i) => (
                            <li key={i}>
                              <label htmlFor={item['id']} className={styles.filterCheckbox}>
                                <input type='checkbox' id={item['id']} value={item['id']} />
                                <span className={styles.checkmark}></span>
                                <span className={styles.labelSpan}>{item['name']}</span>
                              </label>
                            </li>
                          ))
                        }
                        </ul>
                      </div>
                    ))
                  }
                  { 
                  /** Filter Category */
                  filterCategory.map((item, i) => (
                    <div className={styles.filterCategory} key={i}>
                      <p className={styles.filterTitle}>{item['title']}</p>
                      <ul>
                      {
                        item.items.map((item, i) => (
                          <li key={i}>
                            <label htmlFor={item['id']} className={styles.filterCheckbox}>
                              <input type='checkbox' id={item['id']} value={item['id']} />
                              <span className={styles.checkmark}></span>
                              <span className={styles.labelSpan}>{item['name']}</span>
                            </label>
                          </li>
                        ))
                      }
                      </ul>
                    </div>
                  ))
                  }
                  { 
                  /** Filter Size */
                  filterSize.map((item, i) => (
                    <div className={styles.filterCategory} key={i}>
                      <p className={styles.filterTitle}>{item['title']}</p>
                      <div className={styles.sizeWrapper}>
                        {
                          item.items.map((item, i) => (
                              <label htmlFor={item} key={i} className={styles.sizeCheckbox}>
                                <input type='checkbox' id={item} />
                                <span className={styles.sizeCheckmark}></span>
                                <span className={styles.labelSize}>{item}</span>
                              </label>
                          ))
                        }
                      </div>
                    </div>
                  ))
                  }
                </div>
                <div className={styles.filterBtnGroup}>
                  <button className={styles.filterBtn} type='submit'>Фильтр</button>
                  <button className={styles.filterResetBtn} type='submit'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7503 4.5833C21.7503 3.98747 21.2628 3.49997 20.667 3.49997H8.56617L10.7328 5.66664H20.667C21.2628 5.66664 21.7503 5.17914 21.7503 4.5833ZM18.5003 9.99997C18.5003 9.40414 18.0128 8.91664 17.417 8.91664H13.9828L16.1495 11.0833H17.417C18.0128 11.0833 18.5003 10.5958 18.5003 9.99997ZM14.1453 15.2108C14.1562 15.2758 14.167 15.3516 14.167 15.4166C14.167 16.0125 13.6795 16.5 13.0837 16.5H10.917C10.3212 16.5 9.83367 16.0125 9.83367 15.4166C9.83367 14.8208 10.3212 14.3333 10.917 14.3333H13.0837C13.1487 14.3333 13.2245 14.3441 13.2895 14.355L10.0178 11.0833H6.58367C5.98784 11.0833 5.50034 10.5958 5.50034 9.99997C5.50034 9.40414 5.98784 8.91664 6.58367 8.91664H7.85117L4.60117 5.66664H3.33367C3.10812 5.66623 2.88828 5.59565 2.70465 5.46467C2.52103 5.33369 2.38271 5.14882 2.30889 4.93569C2.23507 4.72255 2.2294 4.49173 2.29267 4.27524C2.35595 4.05874 2.48503 3.8673 2.66201 3.72747L1.27534 2.3408C1.07278 2.13824 0.958984 1.86352 0.958984 1.57705C0.958984 1.29059 1.07278 1.01586 1.27534 0.813304C1.4779 0.610745 1.75263 0.496948 2.03909 0.496948C2.32555 0.496948 2.60028 0.610745 2.80284 0.813304L21.187 19.1975C21.2873 19.2978 21.3669 19.4168 21.4211 19.5479C21.4754 19.6789 21.5034 19.8194 21.5034 19.9612C21.5034 20.1031 21.4754 20.2435 21.4211 20.3746C21.3669 20.5056 21.2873 20.6247 21.187 20.725C21.0867 20.8253 20.9676 20.9048 20.8366 20.9591C20.7055 21.0134 20.5651 21.0413 20.4233 21.0413C20.2814 21.0413 20.141 21.0134 20.0099 20.9591C19.8789 20.9048 19.7598 20.8253 19.6595 20.725L14.1453 15.2108Z" fill="#252525"/>
                    </svg>
                  </button>
                </div>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Collections;
