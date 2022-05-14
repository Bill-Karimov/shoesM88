import Link from 'next/link';
import ShoeCard from './ShoeCard';
import styles from '../styles/ShoesOwlList.module.css';

export default function ShoesOwlList({ title, link, products }) {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <Link href={link}>
                    <a className={styles.link}>
                        Посмотреть все
                        <svg width="16" height="18" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 1L16 9.5L7.5 18" stroke="black" strokeWidth="1" />
                            <path d="M16 9.5H0" stroke="black" strokeWidth="1" />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className={styles.cardWrapper}>
                <ShoeCard products={products} />
            </div>
        </div>
    );
};