import HomePage from '/pages/home';

import { getNewProducts, getPopularProducts } from '../lib/productStore';

export const getServerSideProps = async () => {
  const newProducts = await getNewProducts();
  const popularProducts = await getPopularProducts();
  return {
      props: {
        newProducts,
        popularProducts,
      },
  };
};

 const Home = ({newProducts, popularProducts}) => {
  return (
    <div>
      <HomePage newProducts={newProducts} popularProducts={popularProducts} />
    </div>
  )
}

export default Home;