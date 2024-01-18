import React from 'react';
import { useNavigate } from 'react-router-dom';

import prd1 from '../../images/product_1.png';
import prd2 from '../../images/product_2.png';
import prd3 from '../../images/product_3.png';
import prd4 from '../../images/product_4.png';
import prd5 from '../../images/product_5.png';

import './ListCategory.css';

const ListCategory = () => {
  const shopPage = useNavigate();

  return (
    <>
      {/* html Danh sách các danh mục */}
      <div className="container">
        <div className="categories">
          <div className="row">
            <div className="collectionHeading">
              <h6>carefully created collections</h6>
              <h6>browse our categories</h6>
            </div>
          </div>
          <div className="row">
            <div className="categoryItem1">
              <div className="col-6">
                <img
                  src={prd1}
                  alt=""
                  onClick={() => {
                    shopPage('/shop');
                  }}
                />
              </div>
              <div className="col-6">
                <img
                  src={prd2}
                  alt=""
                  onClick={() => {
                    shopPage('/shop');
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="categoryItem2">
              <div className="col">
                <img
                  src={prd3}
                  alt=""
                  onClick={() => {
                    shopPage('/shop');
                  }}
                />
              </div>
              <div className="col">
                <img
                  src={prd4}
                  alt=""
                  onClick={() => {
                    shopPage('/shop');
                  }}
                />
              </div>
              <div className="col">
                <img
                  src={prd5}
                  alt=""
                  onClick={() => {
                    shopPage('/shop');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategory;
