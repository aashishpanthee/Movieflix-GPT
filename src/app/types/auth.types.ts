import { User } from 'firebase/auth';

export type AuthUser = {
  uid: string;
  email: string;
  displayName: string;
};

export type AuthError = {
  error: string | null;
};

export type SignInResult = {
  signedInUser: User | null;
} & AuthError;

export type SignUpResult = {
  signedUpUser: User | null;
} & AuthError;

export type SignOutResult = {
  status: string;
};

export type UpdateProfileResult = {
  updatedUser: User | null;
} & AuthError;

// Function signatures
export type SignInUser = (
  email: string,
  password: string
) => Promise<SignInResult>;

export type SignUpUser = (
  email: string,
  password: string
) => Promise<SignUpResult>;

export type SignOutUser = () => Promise<SignOutResult>;

export type UpdateAuthProfile = (
  signedUpUser: User,
  nameValue?: string
) => Promise<UpdateProfileResult>;
