import { useState, useRef } from 'react';
import Header from './Header';
import backgroundImage from '../assets/background.jpg';
import { checkValidateData } from '../utils/validate';

type Props = {};

const Login = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    // Validate the form data
    if (email.current && password.current) {
      const nameValue = isSignIn ? undefined : name.current?.value?.trim();
      const message = checkValidateData(
        email.current.value,
        password.current.value,
        nameValue,
        isSignIn
      );
      setErrorMessage(message);
    }
  };
  return (
    <div className='bg-black bg-opacity-80'>
      <Header />
      <div className='absolute'>
        <img src={backgroundImage} alt='logo' />
      </div>
      <form
        className='absolute left-0 right-0 w-3/12 px-12 py-16 mx-auto text-white bg-black rounded-sm bg-opacity-80 top-1/4'
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className='py-4 text-3xl font-bold'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='w-full p-4 my-4 bg-gray-600'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='w-full p-4 my-4 bg-gray-600'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='w-full p-4 my-4 bg-gray-600'
        />
        <p className='py-2 text-lg font-bold text-red-600'>{errorMessage}</p>
        <button
          className='w-full p-4 my-6 bg-red-600 rounded-lg'
          onClick={handleButtonClick}
        >
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
