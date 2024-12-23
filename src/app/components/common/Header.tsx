import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { AppDispatch, RootState } from '../../redux/store';
import { addUser, removeUser } from '../../redux/auth/authSlice';
import { auth } from '../../firebase/firebase';
import { signOutUser } from '../../utils/auth';
import {
  USER_ICON,
  HEADER_LOGO,
  HeaderComponentText,
  SUPPORTED_LANGUAGES,
} from '../../utils/constants';
import { toggleGptSearchView } from '../../redux/gpt/gptSlice';
import { changeLanguage } from '../../redux/config/configSlice';

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // cleanup function will be called when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const { user } = useSelector((store: RootState) => store.auth);
  const { showGptSearch } = useSelector((store: RootState) => store.gpt);

  const handleSignOut = async () => {
    const { status } = await signOutUser();
    if (status === 'Signout successfull') {
      // navigating to login page is handled by Firebase onAuthStateChanged listener which is above in useEffect.
    } else {
      console.log(status);
    }
  };
  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className='absolute z-10 flex items-center justify-between w-full px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44' src={HEADER_LOGO} alt='logo' />
      {user && (
        <div className='flex items-center gap-2'>
          {showGptSearch && (
            <select
              className='p-2 m-2 text-white bg-gray-900 outline-none'
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.value}
                </option>
              ))}
            </select>
          )}
          <button
            className='px-4 py-2 mx-4 my-2 text-white bg-purple-800 rounded-md'
            onClick={handleGptSearchView}
          >
            {showGptSearch
              ? HeaderComponentText.BROWSE_PAGE_BUTTON_TEXT
              : HeaderComponentText.GPT_PAGE_BUTTON_TEXT}
          </button>
          <img src={USER_ICON} alt='' className='w-12 h-12' />
          <p className='text-lg text-white'>{user.displayName}</p>
          <button
            className='px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none'
            onClick={handleSignOut}
          >
            {HeaderComponentText.LOGOUT_TEXT}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
