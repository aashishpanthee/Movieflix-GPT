export const checkValidateData = (
  email: string,
  password: string,
  name: string = '',
  isSignIn?: boolean
) => {
  // Validate name only if it's Sign Up
  if (!isSignIn && !name) {
    return 'Name must contain at least 5 characters';
  }
  if (!isSignIn && name && name.trim().length < 5) {
    return 'Name must contain at least 5 characters';
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isEmailValid) {
    return 'Invalid email address';
  }
  if (!isPasswordValid) {
    return 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
  }
  return null;
};
