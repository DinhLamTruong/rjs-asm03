import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAccountActions } from '../../store/userAccount-slice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCartFlatbed,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //  user login
  const userAccount = useSelector(state => state.userAccount.currUser);

  let userName;
  if (userAccount) {
    userName = userAccount.name;
  }
  // hàm logout
  const handleLogout = () => {
    dispatch(userAccountActions.onLogout());
    navigate('/');
  };

  const pathname = window.location.pathname;
  useEffect(() => {
    // user đang login truy cập page login -> page home
    if (pathname === '/login' && userAccount) {
      navigate('/');
    }
    // thêm class 'active' vào tag a có href === pathname
    const menu = document.querySelectorAll('.navbar ul li a');
    menu.forEach(item => {
      if (item.getAttribute('href') === pathname) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, [pathname, userAccount, navigate]);

  return (
    <div className="navbar container">
      <ul>
        <div className="navItem1">
          <li>
            <a
              className="active"
              href="/"
              onClick={e => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="active"
              href="/shop"
              onClick={e => {
                e.preventDefault();
                navigate('/shop');
              }}
            >
              Shop
            </a>
          </li>
        </div>
        <li className="navItem2">BOUTIQUE</li>
        <div className="navItem3">
          <li>
            <a
              className="active"
              href="/cart"
              onClick={e => {
                e.preventDefault();
                navigate('/cart');
              }}
            >
              <span>
                <FontAwesomeIcon
                  style={{ color: '#aaaaaa' }}
                  icon={faCartFlatbed}
                />
              </span>
              <span>Cart</span>
            </a>
          </li>

          {/* user login show username và tag a logout */}
          {userAccount && (
            <li>
              <span>
                <FontAwesomeIcon style={{ color: '#aaaaaa' }} icon={faUser} />
                <span className="userName">{userName}</span>
                <FontAwesomeIcon
                  style={{ marginRight: '6px' }}
                  icon={faCaretDown}
                />
              </span>
              <a
                href="/#"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <span style={{ opacity: '1' }} onClick={handleLogout}>
                  ( Logout )
                </span>
              </a>
            </li>
          )}

          {/* user chưa login show tag a login */}
          {!userAccount && (
            <li>
              <a
                className="active"
                href="/login"
                onClick={e => {
                  e.preventDefault();
                  navigate('/login');
                }}
              >
                <span>
                  <FontAwesomeIcon style={{ color: '#aaaaaa' }} icon={faUser} />
                </span>
                <span>Login</span>
              </a>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
