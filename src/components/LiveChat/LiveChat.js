import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faPaperPlane,
  faPaperclip,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import customer from '../../images/customer.png';
import './liveChat.css';

const LiveChat = () => {
  // state show live chat
  const [openLiveChat, setOpenLiveChat] = useState(false);

  // hàm toggle live chat
  const toggleChat = () => {
    setOpenLiveChat(!openLiveChat);
  };

  return (
    <div className="liveChat">
      <div className="boxLiveChat" onClick={toggleChat}>
        <svg className="iconMess" width="34" height="34" viewBox="0 0 512 512">
          <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
        </svg>
      </div>
      {openLiveChat && (
        <div className="popupChat">
          <div className="chatHeading">
            <h2>customer support</h2>
            <span>let's chat app</span>
          </div>
          <div className="chatContent">
            <div className="chatCustomer">
              <p>Xin chào</p>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="chatCustomer">
              <p>Làm thế nào để xem các sản phẩm</p>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="chatAdmin">
              <img className="iconAdmin" src={customer} alt="" />
              <p>ADMIN : Chào bạn</p>
            </div>
            <div className="chatAdmin">
              <img className="iconAdmin" src={customer} alt="" />
              <p>ADMIN : Bạn có thể vào mục shop để xem các sản phẩm</p>
            </div>
            <div className="chatAdmin">
              <img className="iconAdmin" src={customer} alt="" />
              <p>ADMIN : Bạn có thể vào mục shop để xem các sản phẩm</p>
            </div>
            <div className="chatAdmin">
              <img className="iconAdmin" src={customer} alt="" />
              <p>ADMIN : Bạn có thể vào mục shop để xem các sản phẩm</p>
            </div>
          </div>
          <div className="chatFooter">
            <img className="iconCustomer" src={customer} alt="" />
            <input
              id="inputMess"
              name="inputMess"
              type="text"
              placeholder="Enter Message!"
            />
            <div>
              <FontAwesomeIcon className="iconFooter" icon={faPaperclip} />
              <FontAwesomeIcon className="iconFooter" icon={faFaceSmile} />
              <FontAwesomeIcon className="iconFooter" icon={faPaperPlane} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
