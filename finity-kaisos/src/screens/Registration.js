import React from 'react';
import Header from '../components/Header/Header';
import Register from '../components/Register/Register';
import Softkey from '../components/Footer/Softkey';

const Registeration = () => {
  const onKeyRight = () => {
    window.location.href = '/Login';
  };

  return (
    <>
      <Header title='Finity Registration' />
      <Register />
      <Softkey center='Register' right='Login' onKeyRight={onKeyRight} />
    </>
  );
};

export default Registeration;
