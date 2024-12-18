import { useState, useRef } from 'react';
import { validateUserCredentials } from '../../../utils/validate';
import { signInUser, signUpUser, updateAuthProfile } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/auth/authSlice';

/**
 *
 * @returns all the form data & states & functions related to login/signup form
 */
export const useLoginForm = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   *
   *@description toggles the form between SIGN-UP & SIGN-IN
   */
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null); //  setting the error message to null if user switches the form between sign up / sign in form with error messages.
  };

  /**
   *
   *
   * @description handles the form submission(Validation of user credentials,user signup or signin based on SignIn state)
   * @returns user credentials or error message
   */
  const handleFormSubmit = async () => {
    if (email.current && password.current) {
      const nameValue = isSignIn ? undefined : name.current?.value.trim();
      const message = validateUserCredentials(
        email.current.value,
        password.current.value,
        nameValue,
        isSignIn
      );
      setErrorMessage(message); // if validation fails, setting up the error message and stop the function execution here only.
      if (message) return;

      // if not , sign up or sign in user
      if (isSignIn) {
        // sign in user
        const { error } = await signInUser(
          email.current.value,
          password.current.value
        );
        if (error) {
          setErrorMessage(error);
          return;
        } else {
          navigate('/browse');
        }
      } else {
        // sign up user
        const { signedUpUser, error } = await signUpUser(
          email.current.value,
          password.current.value
        );
        if (error) {
          setErrorMessage(error);
          return;
        } else {
          // update user profile for displayname
          const updatedUserObject = await updateAuthProfile(
            signedUpUser,
            nameValue
          );
          if (updatedUserObject?.error) {
            setErrorMessage(updatedUserObject?.error);
            return;
          } else {
            const { email, uid, displayName } =
              updatedUserObject?.updatedUser || {};
            dispatch(addUser({ uid, email, displayName }));
            navigate('/browse');
          }
        }
      }
    }
  };
  return {
    isSignIn,
    email,
    password,
    name,
    errorMessage,
    toggleSignInForm,
    handleFormSubmit,
  };
};
