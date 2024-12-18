import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
export const signInUser = async (email: string, password: string) => {
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
    return { user: null, error: errorMessage };
  }
};

export const signUpUser = async (email: string, password: string) => {
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
    return { user: null, error: errorMessage };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { status: 'Signout successfull' };
  } catch (error: any) {
    console.log(error.message);
    return { status: "Couldn't signout, please try again" };
  }
};

export const updateAuthProfile = async (
  signedUpUser: any,
  nameValue: string = ''
) => {
  try {
    if (auth.currentUser) {
      await updateProfile(signedUpUser, {
        displayName: nameValue,
      });
      return { updatedUser: auth.currentUser, error: null };
    }
  } catch (error: any) {
    let errorMessage = error.message;
    return { updatedUser: null, error: errorMessage };
  }
};
