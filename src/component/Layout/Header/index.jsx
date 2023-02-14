import { useLocation } from 'react-router-dom';
import { NullHeaderRoutes } from '../../utiils/constant';

const Header = () => {
  const { pathname } = useLocation();

  return (
    !NullHeaderRoutes.includes(pathname) && (
      <nav className='text-3xl font-bold underline'>Hello world!</nav>
    )
  );
};

export default Header;
