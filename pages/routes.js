import Home from 'index';
import Auth from 'auth';
import Cart from 'cart';
import Products from 'products';

import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, CART_ROUTE, PRODUCTS_ROUTE} from '../utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
];

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: PRODUCTS_ROUTE + '/:id',
        Component: Products
    },
];