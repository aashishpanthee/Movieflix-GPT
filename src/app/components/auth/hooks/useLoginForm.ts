import { useState, useRef } from 'react';
import { checkValidateData } from '../../../utils/validate';

export const useLoginForm = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleSignInForm = () => {
    // toggle between sign up & sign in forms
    setIsSignIn(!isSignIn);
    // setting the error message to null if user switches the form between sign up / sign in form with error messages.
    setErrorMessage(null);
  };

  const handleFormSubmit = () => {
    // Validate the form data
    if (email.current && password.current) {
      const nameValue = isSignIn ? undefined : name.current?.value?.trim();
      const message = checkValidateData(
        email.current.value,
        password.current.value,
        nameValue,
        isSignIn
      );
      // setting the error message if validation fails in checkValidateData()
      setErrorMessage(message);
      if (message) return;
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
