import React from 'react';
import Header from '../components/Header/Header';
import LoginMenu from '../components/LoginMenu/LoginMenu';
import Softkey from '../components/Footer/Softkey';

const Login = () => {
  const onKeyRight = () => {
    window.location.href = '/Register';
  };

  return (
    <>
      <Header title='Finity Login' />
      <LoginMenu />
      <Softkey center='Login' right='Register' onKeyRight={onKeyRight} />
    </>
  );
};

export default Login;
