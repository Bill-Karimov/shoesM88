import { newProducts, popularProducts, allProducts } from '../data/products';

export const getNewProducts = async () => {
    return newProducts;
}

export const getPopularProducts = async () => {
    return popularProducts;
}

export const getAllProducts = async () => {
    return allProducts;
}