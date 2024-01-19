import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inpuTelRef = useRef();
  const navigate = useNavigate();

  // handleChange form register
  const handleChangeName = e => {
    const fullName = document.getElementById('fullName');
    fullName.innerText = '';
    setEnteredName(e.target.value);
  };
  const handleChangeEmail = e => {
    const email = document.getElementById('email');
    email.innerText = '';
    setEnteredEmail(e.target.value);
  };
  const handleChangePassword = e => {
    const password = document.getElementById('password');
    password.innerText = '';
    setEnteredPassword(e.target.value);
  };
  const handleChangePhone = e => {
    const phoneNumber = document.getElementById('tel');
    phoneNumber.innerText = '';
    setEnteredPhone(e.target.value);
  };

  // array user
  const userArr = JSON.parse(localStorage.getItem('userArr')) ?? [];

  const dataUser = {
    name: enteredName,
    email: enteredEmail,
    password: enteredPassword,
    phone: enteredPhone,
  };

  let isSubmit = false;

  // hàm validate form
  function validate() {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phoneNumber = document.getElementById('tel');

    // check email tồn tại ?
    const isEmail = userArr.some(user => enteredEmail.trim() === user.email);

    // check input fullname
    if (enteredName.trim() === '') {
      fullName.innerText = 'Vui lòng nhập full name!';
      inputNameRef.current.focus();
      return (isSubmit = false);
    }

    // check input email
    if (enteredEmail.trim() === '') {
      email.innerText = 'Vui lòng nhập email!';
      inputEmailRef.current.focus();
      return (isSubmit = false);
    } else if (isEmail === true) {
      email.innerText = 'Email đã tồn tại';
      inputEmailRef.current.focus();
      return (isSubmit = false);
    }

    // check input password
    if (enteredPassword.trim() === '') {
      password.innerText = 'Vui lòng nhập password!';
      inputPasswordRef.current.focus();
      return (isSubmit = false);
    } else if (enteredPassword.length < 8) {
      password.innerText = 'Password tối thiểu phải có 8 ký tự!';
      inputPasswordRef.current.focus();
      return (isSubmit = false);
    }

    // check input tel
    if (enteredPhone.trim() === '') {
      phoneNumber.innerText = 'Vui lòng nhập phone number!';
      inpuTelRef.current.focus();
      return (isSubmit = false);
    } else {
      isSubmit = true;
    }
  }

  // hàm submit form register
  const hanleSubimt = e => {
    e.preventDefault();

    validate();
    if (isSubmit) {
      userArr.push(dataUser);
      localStorage.setItem('userArr', JSON.stringify(userArr));
      navigate('/login');
    }
  };

  return (
    <div className="container wrapper__register">
      <div className="register">
        <h2 className="register__title">Sign Up</h2>
        <form onSubmit={hanleSubimt}>
          <div>
            <input
              id="inputFullName"
              type="text"
              placeholder="Full Name"
              value={enteredName}
              onChange={handleChangeName}
              ref={inputNameRef}
            />
            <label htmlFor="inputFullName" id="fullName"></label>
          </div>
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
              ref={inputPasswordRef}
            />
            <label htmlFor="inputPassword" id="password"></label>
          </div>
          <div>
            <input
              id="inputTel"
              className="inputTel"
              type="tel"
              placeholder="Phone"
              value={enteredPhone}
              onChange={handleChangePhone}
              ref={inpuTelRef}
            />
            <label htmlFor="inputTel" id="tel"></label>
          </div>
          <button className="btnSingup">sign up</button>
        </form>
        <div className="loginClick">
          <span>login?</span>
          <a href="/login">click</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
