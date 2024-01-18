import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Browse, { loader as productLoader } from './pages/Browse';
import ShopPage, { loader as productShopLoader } from './pages/Shop';
import DetailPage, { loader as productDetailLoader } from './pages/Detail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';

// create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        id: 'product',
        index: true,
        element: <Browse />,
        loader: productLoader,
      },
      {
        path: 'shop',
        element: <ShopPage />,
        loader: productShopLoader,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'detail/:productId',
        element: <DetailPage />,
        loader: productDetailLoader,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
