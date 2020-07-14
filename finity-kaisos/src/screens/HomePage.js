import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className='container pt-5 mt-3'>
        <center>
          <h1>Welcome to Finity</h1>
          <br />
          <a className='btn btn-primary btn-sm' href='/Login'>
            Proceed to login
          </a>
        </center>
      </div>
    </>
  );
};

export default HomePage;
