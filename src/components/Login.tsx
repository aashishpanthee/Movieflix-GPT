import React, { useState } from 'react';
import Header from './Header.tsx';

type Props = {};

const Login = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className='bg-black bg-opacity-80'>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/NP-en-20241111-TRIFECTA-perspective_bf5889d0-60a0-48cd-ab7a-cd61c9650f89_large.jpg'
          alt='logo'
        />
      </div>
      <form className='absolute left-0 right-0 w-3/12 px-12 py-16 mx-auto text-white bg-black rounded-sm bg-opacity-80 top-1/4'>
        <h1 className='py-4 text-3xl font-bold'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type='text'
            placeholder='Full Name'
            className='w-full p-4 my-4 bg-gray-600'
          />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='w-full p-4 my-4 bg-gray-600'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-4 my-4 bg-gray-600'
        />
        <button className='w-full p-4 my-6 bg-red-600 rounded-lg'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignIn ? 'New to Netflix? Sign up' : 'Already Registered? Sign In'}
        </p>
      </form>
    </div>
  );
};

export default Login;
