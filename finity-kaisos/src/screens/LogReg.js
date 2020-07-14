import React from 'react';
import Header from '../components/Header/Header';
import LoginMenu from '../components/LoginMenu/LoginMenu';
import Softkey from '../components/Footer/Softkey';

const LogReg = () => {
  return (
    <>
      <Header title='Finity' />
      <LoginMenu />
      <Softkey center='Login' right='Register' />
    </>
  );
};

export default LogReg;
