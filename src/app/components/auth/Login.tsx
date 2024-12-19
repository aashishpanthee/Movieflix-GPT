import { JSX } from 'react';
import Header from '../../components/Header';
import { useLoginForm } from './hooks/useLoginForm';

type Props = {};

const Login = (props: Props): JSX.Element => {
  const {
    isSignIn,
    errorMessage,
    email,
    password,
    name,
    toggleSignInForm,
    handleFormSubmit,
  } = useLoginForm();

  return (
    <div className='bg-black bg-opacity-80'>
      <Header />
      <div className='absolute w-full'>
        <img
          src='/assets/background.jpg'
          alt='logo'
          className='object-cover w-full h-screen'
        />
      </div>
      <form
        className='absolute left-0 right-0 w-3/12 px-12 py-16 mx-auto text-white bg-black rounded-sm bg-opacity-80 top-1/4'
        onSubmit={(e) => e.preventDefault()}
      >
        <h1
          className='py-4 text-3xl font-bold'
          data-testid={`${isSignIn ? 'Sign-In' : 'Sign-Up'}`}
        >
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
        <p
          className='py-2 text-lg font-bold text-red-600'
          data-testid='error-message'
        >
          {errorMessage}
        </p>
        <button
          className='w-full p-4 my-6 bg-red-600 rounded-lg'
          onClick={handleFormSubmit}
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
