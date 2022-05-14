import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='Женская обувь в Ташкенте, Качественная обувь, Доступные цены, Производство — Турция' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;