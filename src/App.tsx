import { RouterProvider } from 'react-router-dom';
import router from './app/router/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './app/firebase/firebase';
import { addUser, removeUser } from './app/redux/auth/authSlice';
import { AppDispatch } from './app/redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
