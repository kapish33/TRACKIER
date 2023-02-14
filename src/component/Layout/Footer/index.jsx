import { useLocation } from 'react-router-dom';
import { NullFooterRoutes } from '../../utiils/constant';

const Footer = () => {
  const { pathname } = useLocation();
  return NullFooterRoutes.includes(pathname) && <footer></footer>;
};

export default Footer;
