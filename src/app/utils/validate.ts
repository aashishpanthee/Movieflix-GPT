export const validateUserCredentials = (
  email: string,
  password: string,
  name: string | undefined,
  isSignIn?: boolean
) => {
  if (!isSignIn && !name) {
    return 'Name must contain at least 5 characters';
  }
  if (!isSignIn && name && name.trim().length < 5) {
    return 'Name must contain at least 5 characters';
  }
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  if (!isEmailValid) {
    return 'Invalid email address.';
  }
  if (!isPasswordValid) {
    return 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
  }
  return null;
};

function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
function validatePassword(password: string): boolean {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return regex.test(password);
}
