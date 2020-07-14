import React from 'react';
import Header from './components/Header/Header';
import Softkey from './components/Footer/Softkey';
import LoginMenu from './components/LoginMenu/LoginMenu';

export default function App() {
  return (
    <>
      <Header title='Finity' />
      <LoginMenu />
      <Softkey center='Login' right='Register' />
    </>
  );
}
