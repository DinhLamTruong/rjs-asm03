import React, { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import useConvertPrice from '../../hooks/useConvertPrice';

import './Detail.css';

const Detail = ({ dataProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceFormat = useConvertPrice();

  // id sản phẩm thông qua url
  const productId = useParams();

  // state số lượng sản phẩm
  const [quantityProduct, setQuantityProduct] = useState(1);

  // state user đang login
  const currUser = useSelector(state => state.userAccount.currUser);

  // chi tiết thông tin sản phâm
  const productDetails = dataProducts.find(
    product => product._id.$oid === productId.productId
  );

  // hàm tách chuỗi -> array tính năng chi tiết sản phẩm
  const features = productDetails.long_desc.split('\n');

  // lọc sản phẩm có cùng category
  const ralatedProducts = dataProducts.filter(
    product =>
      product._id.$oid !== productId.productId &&
      product.category === productDetails.category
  );

  // hàm giảm số lượng sản phẩm -1 khi click
  const handleDecrease = () => {
    if (quantityProduct > 1) {
      setQuantityProduct(prev => prev - 1);
    } else setQuantityProduct(1);
  };
  // hàm tăng số lượng sản phẩm +1 khi click
  const handleIncrease = () => {
    setQuantityProduct(prev => prev + 1);
  };

  // hàm set input số lượng sản phẩm -> '' khi input không phải number
  const handleChangeQuantity = e => {
    if (isNaN(+e.target.value)) {
      setQuantityProduct('');
    } else setQuantityProduct(+e.target.value);
  };

  // hàm lắng nghe event khi ấn nút backspace
  // set số lượng -> '' nếu value input < 9
  const handleKeyDown = e => {
    if (e.keyCode === 8 && e.target.value <= 9) {
      setQuantityProduct('');
    }
  };

  // hàm thêm sản phẩm vào giỏ hàng
  const handleAddCart = () => {
    if (currUser !== null && quantityProduct > 0) {
      dispatch(
        cartActions.addCart({
          item: productDetails,
          quantity: quantityProduct,
          price: productDetails.price * quantityProduct,
          email: currUser.email,
        })
      );
    }
  };

  return (
    <div className="container">
      {/* html img chi tiết sản phẩm */}
      <div className="row">
        <div className="col-2">
          <div className="productImg">
            <img src={productDetails.img1} alt="" />
            <img src={productDetails.img2} alt="" />
            <img src={productDetails.img3} alt="" />
            <img src={productDetails.img4} alt="" />
          </div>
        </div>
        <div className="col-4">
          <img className="zoomImg" src={productDetails.img4} alt="" />
        </div>

        {/* html thông tin chi tiết sản phẩm */}
        <div className="col-6">
          <div className="productDetails">
            <h2>{productDetails.name}</h2>
            <span>{priceFormat(productDetails.price)} VND</span>
            <p>{productDetails.short_desc}</p>
            <div className="category">
              <p>category:</p> <p>{productDetails.category}</p>
            </div>
            <div className="quantity">
              <div className="quantityContent">
                <span>quantity</span>
                <div className="quantityNumber">
                  <button style={{ border: 'none', background: 'none' }}>
                    <FontAwesomeIcon
                      icon={faCaretLeft}
                      onClick={handleDecrease}
                    />
                  </button>
                  <input
                    style={{
                      width: '64px',
                      height: '30px',
                      textAlign: 'center',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderTop: '1px solid #e1e5e9',
                      borderBottom: '1px solid #e1e5e9',
                    }}
                    onChange={handleChangeQuantity}
                    onKeyDown={handleKeyDown}
                    type="text"
                    role="spinbutton"
                    value={quantityProduct}
                  />
                  <button style={{ border: 'none', background: 'none' }}>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      onClick={handleIncrease}
                    />
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddCart}
                className="btnAddCart"
                disabled={!currUser}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="description">
            <div className="desButton">
              <button>description</button>
            </div>
            <h6>product description</h6>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* html ralated products */}
      <div className="row">
        <div className="col-6">
          <h6 className="relatedTitle">ralated products</h6>
          <div className="relatedDes">
            {ralatedProducts.map(product => (
              <div className="relaedProduct" key={product._id.$oid}>
                <img
                  onClick={() => {
                    navigate(`/detail/${product._id.$oid}`);
                  }}
                  src={product.img1}
                  alt=""
                />
                <div className="productContent">
                  <span className="relatedName">{product.name}</span>
                  <span className="relatedPrice">
                    {priceFormat(product.price)} VND
                  </span>
                </div>
              </div>
            ))}
            {ralatedProducts.length === 0 && (
              <p
                style={{
                  fontSize: '20px',
                  marginLeft: '20px',
                  fontStyle: 'italic',
                }}
              >
                No related products!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
