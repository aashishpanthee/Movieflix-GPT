import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';

describe('Login Component', () => {
  test('renders login form with sign in mode by default', () => {
    render(<Login />);
    expect(screen.getByTestId('Sign-In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('toggles between sign in and sign up modes', () => {
    render(<Login />);
    const toggleButton = screen.getByText('New to Netflix? Sign up');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sign-Up')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
  });

  test('displays error message when provided', () => {
    render(<Login />);
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });

  test('shows name input only in sign up mode', () => {
    render(<Login />);
    expect(screen.queryByPlaceholderText('Full Name')).not.toBeInTheDocument();

    const toggleButton = screen.getByText('New to Netflix? Sign up');
    fireEvent.click(toggleButton);

    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
  });
});