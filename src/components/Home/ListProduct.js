import React from 'react';
import { useDispatch } from 'react-redux';

import { popupActions } from '../../store/Popup-slice';

import useConvertPrice from '../../hooks/useConvertPrice';

import './ListProduct.css';

const ListProduct = ({ dataProduct }) => {
  const dispatch = useDispatch();
  const priceProduct = useConvertPrice();

  return (
    <>
      {/* html Danh sách các sản phẩm */}
      <div className="container">
        <div className="row">
          <div className="productTrend">
            <h4>made the hard way</h4>
            <h4>top trending products</h4>
          </div>
        </div>
        <div className="row">
          <div className="productItems">
            {dataProduct.map((product, index) => {
              const handleClickImg = () => {
                dispatch(popupActions.showPopupProduct(product));
              };
              return (
                <div key={index}>
                  <img src={product.img1} onClick={handleClickImg} alt="" />
                  <h6 className="product__name">{product.name}</h6>
                  <span>{priceProduct(product.price)} VND</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
