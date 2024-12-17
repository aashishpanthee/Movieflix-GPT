import { renderHook, act } from '@testing-library/react-hooks';
import { useLoginForm } from '../hooks/useLoginForm';

describe('useLoginForm', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useLoginForm());

    expect(result.current.isSignIn).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it('should toggle sign in state', () => {
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.toggleSignInForm();
    });

    expect(result.current.isSignIn).toBe(false);
    expect(result.current.errorMessage).toBeNull();
  });

  it('should handle form validation errors', () => {
    const { result } = renderHook(() => useLoginForm());

    // Mock refs
    result.current.email.current = {
      value: 'invalid-email',
    } as HTMLInputElement;
    result.current.password.current = { value: '123' } as HTMLInputElement;

    act(() => {
      result.current.handleFormSubmit();
    });

    expect(result.current.errorMessage).not.toBeNull();
  });

  it('should clear error message when toggling form', () => {
    const { result } = renderHook(() => useLoginForm());

    // Set an initial error
    act(() => {
      result.current.handleFormSubmit();
    });

    act(() => {
      result.current.toggleSignInForm();
    });

    expect(result.current.errorMessage).toBeNull();
  });
});
