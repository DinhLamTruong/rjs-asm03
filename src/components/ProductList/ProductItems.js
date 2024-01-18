import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

import useConvertPrice from '../../hooks/useConvertPrice';

import './ProductItems.css';

const ProductItems = ({ productAll }) => {
  const priceProduct = useConvertPrice();
  const navigate = useNavigate();

  return (
    <div className="col-9">
      <div className="searchProduct">
        <input
          id="searchCategory"
          name="searchCategory"
          className="inputSearch"
          type="text"
          placeholder="Enter search here!"
        />
        <select id="option" className="selectOption">
          <option>Default setting</option>
          <option>Des</option>
          <option>Asc</option>
        </select>
      </div>
      <div className="productItem">
        {productAll.map((product, index) => {
          return (
            <div className="productItemDetail" key={product._id.$oid}>
              <img
                src={product.img1}
                alt=""
                onClick={() => {
                  navigate(`/detail/${product._id.$oid}`);
                }}
              />
              <div className="productName">{product.name}</div>
              <div className="productPrice">
                {priceProduct(product.price)} VND
              </div>
            </div>
          );
        })}
      </div>
      {productAll.length === 0 && (
        <p
          style={{
            fontSize: '20px',
            fontStyle: 'italic',
            marginTop: '40px',
          }}
        >
          The category has no products!
        </p>
      )}
      <div className="navigatePage">
        <div className="btnNavigatePage">
          <FontAwesomeIcon className="icon" icon={faAngleDoubleLeft} />
          <span className="pageNumber"> 1</span>
          <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
        </div>
        <div className="desciptionPage">Showing 1-9 of 9 results</div>
      </div>
    </div>
  );
};

export default ProductItems;
