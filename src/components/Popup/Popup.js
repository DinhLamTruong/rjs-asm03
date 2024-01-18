import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { popupActions } from '../../store/Popup-slice';
import useConvertPrice from '../../hooks/useConvertPrice';

import './Popup.css';

const Popup = () => {
  const dispatch = useDispatch();
  const priceProduct = useConvertPrice();

  // state show popup products
  const popupProdcuct = useSelector(state => state.popup.isPopupVisiable);

  // state thông tin sản phẩm khi click
  const productActive = useSelector(state => state.popup.product);

  // hàm close popup
  const handleCloseModal = () => {
    dispatch(popupActions.hidePopupProduct());
  };
  return (
    <>
      {popupProdcuct && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalBody">
              <div className="modalImg">
                <img src={productActive.img1} alt="" />
              </div>
              <div className="modalDescription">
                <div className="closeModal">
                  <span
                    style={{ padding: '4px 16px', fontSize: '28px' }}
                    onClick={handleCloseModal}
                  >
                    &times;
                  </span>
                </div>
                <h3>{productActive.name}</h3>
                <span>{priceProduct(productActive.price)} VND</span>
                <p>{productActive.short_desc}</p>
                <div className="linkDetail">
                  <a href={`/detail/${productActive._id.$oid}`}>
                    <FontAwesomeIcon
                      className="iconView"
                      icon={faCartShopping}
                    />
                    view detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
