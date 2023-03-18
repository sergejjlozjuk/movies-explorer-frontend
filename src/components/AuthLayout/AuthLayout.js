import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './AuthLayout.css';

function AuthLayout() {
  return (
    <>
      <Header headerClassName='header_auth' />
      <Outlet />
    </>
  );
}

export default AuthLayout;
