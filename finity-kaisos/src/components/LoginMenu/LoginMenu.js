import React from 'react';

const LoginMenu = () => {
  return (
    <div className='container pt-3'>
      <div className='container'>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <center>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default LoginMenu;
