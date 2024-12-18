import userIcon from '../../assets/user-icon.jpg';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
type Props = {};

const Header = (props: Props) => {
  const { user } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    const { status } = await signOutUser();
    if (status === 'Signout successfull') {
      navigate('/');
    } else {
      console.log(status);
    }
  };
  return (
    <div className='absolute z-10 flex items-center justify-between w-full px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44' src='/assets/header_logo.png' alt='logo' />
      {user && (
        <div className='flex items-center gap-2'>
          <img src={userIcon} alt='' className='w-12 h-12' />
          <p className='text-lg text-white'>{user.displayName}</p>
          <button
            className='px-4 py-2 text-lg text-white bg-gray-700 rounded-md focus:outline-none'
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
