import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from '../../styles/ShoeDetail.module.css';

export default function () {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <Head>
                <title>{name} | M88 - Онлайн Магазин Женской обуви в Ташкенте</title>
            </Head>
            <div className={styles.shoeDetailContent}>
            </div>
        </>
    );
};