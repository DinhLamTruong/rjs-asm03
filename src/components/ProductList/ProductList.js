import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import ProductItems from './ProductItems';
import './ProductList.css';

const ProductList = ({ category }) => {
  const [searchParams] = useSearchParams();

  let productAll = [];
  // lọc sản phẩm có category === searchParams
  if (category !== undefined) {
    switch (searchParams.get('category')) {
      case 'iphone':
        productAll = category.filter(product => product.category === 'iphone');
        break;
      case 'ipad':
        productAll = category.filter(product => product.category === 'ipad');
        break;
      case 'macbook':
        productAll = category.filter(product => product.category === 'macbook');
        break;
      case 'airpod':
        productAll = category.filter(product => product.category === 'airpod');
        break;
      case 'watch':
        productAll = category.filter(product => product.category === 'watch');
        break;
      case 'mouse':
        productAll = category.filter(product => product.category === 'mouse');
        break;
      case 'keyboard':
        productAll = category.filter(
          product => product.category === 'keyboard'
        );
        break;
      default:
        productAll = category;
        break;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="categoriesTop">
          <h4 className="col">Shop</h4>
          <h6 className="col">Shop</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="categories">
            <h4>categories</h4>
            <div className="navbarLeft">
              <ul>
                <li className="navActive">Apple</li>
                <li>
                  <NavLink
                    to={'/shop?category=all'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'all'
                        ? 'active'
                        : undefined
                    }
                  >
                    All
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>Iphone & Mac</li>
                <li>
                  <NavLink
                    to={'/shop?category=iphone'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'iphone'
                        ? 'active'
                        : undefined
                    }
                  >
                    Iphone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/shop?category=ipad'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'ipad'
                        ? 'active'
                        : undefined
                    }
                  >
                    Ipad
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/shop?category=macbook'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'macbook'
                        ? 'active'
                        : undefined
                    }
                  >
                    Macbook
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>WireLess</li>
                <li>
                  <NavLink
                    to={'/shop?category=airpod'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'airpod'
                        ? 'active'
                        : undefined
                    }
                  >
                    airpod
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/shop?category=watch'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'watch'
                        ? 'active'
                        : undefined
                    }
                  >
                    watch
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>other</li>
                <li>
                  <NavLink
                    to={'/shop?category=mouse'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'mouse'
                        ? 'active'
                        : undefined
                    }
                  >
                    mouse
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/shop?category=keyboard'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'keyboard'
                        ? 'active'
                        : undefined
                    }
                  >
                    keyboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/shop?category=other'}
                    className={({ isActive }) =>
                      isActive && searchParams.get('category') === 'other'
                        ? 'active'
                        : undefined
                    }
                  >
                    other
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* product items */}
        <ProductItems productAll={productAll} />
      </div>
    </div>
  );
};

export default ProductList;
