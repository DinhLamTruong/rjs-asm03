import React from 'react';
import { useSelector } from 'react-redux';

import useConvertPrice from '../../hooks/useConvertPrice';

import FormCheckout from './FormCheckout';
import './Checkout.css';

const Checkout = () => {
  const priceProduct = useConvertPrice();

  // state user login
  const currUser = useSelector(state => state.userAccount.currUser) ?? [];
  // state tất cả danh sách sản phẩm
  const listCart = useSelector(state => state.cart.listCart);

  // danh sách sản phẩm order của user đang login
  const yourOder = listCart.filter(item => item.email === currUser.email);
  
  // hàm tính tổng giá sản phẩm order
  const total = yourOder.reduce(
    (prePrice, currPrice) => prePrice + currPrice.price,
    0
  );

  return (
    <div className="container">
      <div className="checkout">
        <div>
          <h2 className="checkoutHeading">Checkout</h2>
        </div>
        <div className="checkoutNavigate">
          <span>home /</span>
          <span>cart /</span>
          <span>Checkout</span>
        </div>
      </div>
      <h2 className="checkout__title">billing details</h2>
      <div className="billingDetails">
        {/* form checkout */}
        <FormCheckout />

        {/* box your order */}
        <div className="infoOrder">
          <div className="productDetail">
            <h2 className="orderHeaeding">your order</h2>
            {currUser &&
              yourOder.map(item => (
                <div className="oderProducts" key={item.item._id.$oid}>
                  <span>{item.item.name}</span>
                  <span>
                    {priceProduct(item.item.price)} VND{' '}
                    <span style={{ marginRight: '6px', fontSize: '12px' }}>
                      X
                    </span>
                    {item.quantity}
                  </span>
                </div>
              ))}
            <div className="totalPrice">
              <span>total</span>
              <span>{priceProduct(total)} VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
