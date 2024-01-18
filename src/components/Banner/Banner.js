import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner__contents">
        <div className="banner__content">
          <span>new inspiration 2020 </span>
          <span>20% off on new season</span>
          <button
            onClick={() => {
              navigate('/shop');
            }}
          >
            Browse collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
