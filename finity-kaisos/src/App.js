import React from 'react';
import Header from './components/Header/Header';
import Softkey from './components/Footer/Softkey';

export default function App() {
  return (
    <>
      <Header title='Finity' />
      <Softkey center='Login' right='Register' />
    </>
  );
}
