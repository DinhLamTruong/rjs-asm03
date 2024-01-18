import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  // danh sách products có trong giỏ hàng
  const item = useSelector(state => state.cart.listCart);
  return (
    <div>
      <Layout>
        <Cart item={item} />
      </Layout>
    </div>
  );
};

export default CartPage;
