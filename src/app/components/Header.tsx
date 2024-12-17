type Props = {};

const Header = (props: Props) => {
  return (
    <div className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44' src='/assets/header_logo.png' alt='logo' />
    </div>
  );
};

export default Header;
