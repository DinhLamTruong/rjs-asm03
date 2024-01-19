import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAccountActions } from '../../store/userAccount-slice';

import './Login.css';

const Login = () => {
  // state email
  const [enteredEmail, setEnteredEmail] = useState('');
  // state password
  const [enteredPassword, setEnteredPassword] = useState('');

  const inputEmailRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // array user
  const userArr = JSON.parse(localStorage.getItem('userArr')) ?? [];

  // check email có tồn tại ?
  const emailExist = userArr.some(user => enteredEmail === user.email);

  // check password có tồn tại ?
  const passwordExist = userArr.some(user => enteredPassword === user.password);

  let userAccount;
  // check email , password đúng => account user
  if (emailExist && passwordExist) {
    userAccount = userArr.find(
      user => user.email === enteredEmail && user.password === enteredPassword
    );
  }

  const handleChangeEmail = e => {
    const emailElement = document.getElementById('email');
    emailElement.innerText = '';
    setEnteredEmail(e.target.value);
  };
  const handleChangePassword = e => {
    const passwordElement = document.getElementById('password');
    passwordElement.innerText = '';
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    inputEmailRef.current.focus();
  }, []);

  let isValidate = false;
  // hàm check value input hợp lệ ?
  function validate() {
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    if (enteredEmail.trim() === '') {
      emailElement.innerText = 'Vui lòng nhập email!';
      return (isValidate = false);
    } else {
      emailElement.innerText = '';
    }

    if (enteredPassword.trim() === '') {
      passwordElement.innerText = 'Vui lòng nhập password!';
      return (isValidate = false);
    } else {
      passwordElement.innerText = '';
      isValidate = true;
    }
  }

  //  hàm submit khi click button sign in
  const handleSubmit = e => {
    e.preventDefault();
    validate();

    if (isValidate === true) {
      const emailElement = document.getElementById('email');
      const passwordElement = document.getElementById('password');

      // email không tồn tại -> thông báo người dùng
      if (emailExist === false) {
        emailElement.innerText = 'Email không tồn tại!';
        setEnteredPassword('');
        return (isValidate = false);
      }

      // password sai -> thông báo người dùng
      if (passwordExist === false) {
        passwordElement.innerText = 'Password không hợp lệ!';
        setEnteredPassword('');
        return (isValidate = false);
      }
      dispatch(userAccountActions.onLogin(userAccount));
      alert('Login success!');
      navigate('/');
    }
  };
  return (
    <div className="container wrapper__login">
      <div className="login">
        <h2 className="login__title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="inputEmail"
              type="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={handleChangeEmail}
              ref={inputEmailRef}
            />
            <label htmlFor="inputEmail" id="email"></label>
          </div>
          <div>
            <input
              id="inputPassword"
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword" id="password"></label>
          </div>
          <button className="btnSingin">sign in</button>
        </form>
        <div className="linkSignUp">
          <span>Create an account?</span>
          <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
