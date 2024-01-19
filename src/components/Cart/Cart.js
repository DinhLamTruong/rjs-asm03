import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faGift,
  faLeftLong,
  faRightLong,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

import { cartActions } from '../../store/cart-slice';
import useConvertPrice from '../../hooks/useConvertPrice';

import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const priceProduct = useConvertPrice();

  // state user login
  const currUser = useSelector(state => state.userAccount.currUser) ?? {};

  // danh sách tất cả các sản phẩm
  const listProduct = useSelector(state => state.cart.listCart);

  // danh sách sản phẩm của user đang login
  const productUserActive = listProduct.filter(
    item => item.email === currUser.email
  );

  // hàm tính tổng tiền các các sản phẩm của user đang login
  const totalProduct = productUserActive.reduce((a, b) => a + b.price, 0);

  // hàm giảm đi 1 sản phẩm trong giỏ hàng
  const handleDecreaseProduct = item => {
    if (item.quantity > 1) {
      dispatch(
        cartActions.addCart({
          item: item.item,
          quantity: -1,
          price: -item.item.price,
          email: item.email,
        })
      );
    }
  };
  // hàm tăng 1 sản phẩm trong giỏ hàng
  const handleIncreaseProduct = item => {
    dispatch(
      cartActions.addCart({
        item: item.item,
        quantity: 1,
        price: +item.item.price,
        email: item.email,
      })
    );
  };
  // hàm xóa 1 sản phẩm trong giỏ hàng
  const handleDeleteProduct = item => {
    dispatch(cartActions.deleteCart(item));
  };

  return (
    <div className="container">
      <div className="cartHeader">
        <h2>CART</h2>
        <span>CART</span>
      </div>
      <div>
        <h2 className="cartTitle">SHOPPING CART</h2>
      </div>
      <div className="shoppingCart">
        <div className="cartProductDetail">
          <ul className="cartProductTitle">
            <li>image</li>
            <li>product</li>
            <li>price</li>
            <li>quantity</li>
            <li>total</li>
            <li>remove</li>
          </ul>
          {/* user login show sản phẩm có trong giỏ hàng */}
          {currUser &&
            productUserActive.map(item => (
              <ul className="cartProductItem" key={item.item._id.$oid}>
                <li>
                  <img src={item.item.img1} alt="" width={80} height={100} />
                </li>
                <li>{item.item.name}</li>
                <li className="price">{priceProduct(item.item.price)} VND</li>
                <li className="quantityCart">
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    onClick={() => {
                      handleDecreaseProduct(item);
                    }}
                  />
                  <span>{item.quantity}</span>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    onClick={() => {
                      handleIncreaseProduct(item);
                    }}
                  />
                </li>
                <li className="price">{priceProduct(item.price)} VND</li>
                <li className="trashCan">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    opacity={0.6}
                    onClick={() => {
                      handleDeleteProduct(item);
                    }}
                  />
                </li>
              </ul>
            ))}
          {/* user chưa login, giỏ hàng trống => giỏ hàng chưa có sản phẩm */}
          {productUserActive.length === 0 && (
            <p style={{ fontSize: '20px' }}>
              You have no items in your shopping cart!
            </p>
          )}

          <div className="navigateCart">
            <div className="backShopping">
              <span>
                <FontAwesomeIcon icon={faLeftLong} />
              </span>
              <span
                onClick={() => {
                  navigate('/shop');
                }}
              >
                Continue shopping
              </span>
            </div>
            <div className="proceedCheckout">
              <span
                onClick={() => {
                  navigate('/checkout');
                }}
              >
                Proceed to checkout
              </span>
              <span>
                <FontAwesomeIcon icon={faRightLong} />
              </span>
            </div>
          </div>
        </div>
        {/* box tổng giỏ hàng */}
        <div className="cartTotal">
          <div className="wrapperCart">
            <h2 className="cartTotalHeading">cart total</h2>
            <div className="subTotal">
              <span>subtotal</span>
              <span>{priceProduct(totalProduct)} VND</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{priceProduct(totalProduct)} VND</span>
            </div>
            <input
              name="inputCoupon"
              className="inputCoupon"
              type="text"
              placeholder="Enter your coupon"
            />
            <button className="btnApply">
              <FontAwesomeIcon icon={faGift} style={{ marginRight: '10px' }} />
              Apply coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
