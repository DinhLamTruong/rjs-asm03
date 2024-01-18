import React from 'react';

import './OtherInfo.css';

const OtherInfo = () => {
  return (
    <>
      {/* html thông tin khác */}
      <div className="container">
        <div className="row">
          <div className="freeShip">
            <div className="col">
              <h4>free shipping</h4>
              <span>Free shipping worlwide</span>
            </div>
            <div className="col">
              <h4>24 X 7 service</h4>
              <span>Free shipping worlwide</span>
            </div>
            <div className="col">
              <h4>festival offer</h4>
              <span>Free shipping worlwide</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contactMail">
            <div className="col">
              <div className="mailContent">
                <h4>let's be friends!</h4>
                <span>Nisi nisi tempor consequat laboris nisi.</span>
              </div>
            </div>
            <div className="col">
              <div className="mailInput">
                <input
                  name="inputMail"
                  type="text"
                  placeholder="Enter your email address"
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
