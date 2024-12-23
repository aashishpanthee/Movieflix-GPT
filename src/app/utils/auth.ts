import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import {
  SignInUser,
  SignOutUser,
  SignUpUser,
  UpdateAuthProfile,
} from '../types/auth.types';

export const signOutUser: SignOutUser = async () => {
  try {
    await signOut(auth);
    return { status: 'Signout successfull' };
  } catch (error: any) {
    return { status: "Couldn't signout, please try again" };
  }
};

export const signInUser: SignInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { signedInUser: userCredential.user, error: null };
  } catch (error: any) {
    let errorMessage = error.message;
    if (errorMessage.includes('auth/invalid-credential')) {
      errorMessage = 'Invalid Credentials';
    }
    return { signedInUser: null, error: errorMessage };
  }
};

export const signUpUser: SignUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { signedUpUser: userCredential.user, error: null };
  } catch (error: any) {
    let errorMessage = error.message;
    if (errorMessage.includes('email-already')) {
      errorMessage = 'Email already exists';
    }
    return { signedUpUser: null, error: errorMessage };
  }
};

export const updateAuthProfile: UpdateAuthProfile = async (
  signedUpUser,
  nameValue = ''
) => {
  try {
    if (auth.currentUser) {
      await updateProfile(signedUpUser, {
        displayName: nameValue,
      });
      return { updatedUser: auth.currentUser, error: null };
    }
    return { updatedUser: null, error: 'No current user' };
  } catch (error: any) {
    let errorMessage = error.message;
    return { updatedUser: null, error: errorMessage };
  }
};
