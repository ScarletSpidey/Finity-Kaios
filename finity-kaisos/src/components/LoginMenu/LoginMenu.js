import React from 'react';

const LoginMenu = () => {
  return (
    <div className='container pt-3'>
      <div className='container'>
        <form>
          <div className=''>
            <label htmlFor='exampleInputEmail1'>
              <small>Account aggregator Id</small>
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='pb-3'>
            <label htmlFor='exampleInputPassword1'>
              <small>Your Pin</small>
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>

          <button type='submit' className='btn btn-primary btn-sm'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginMenu;
