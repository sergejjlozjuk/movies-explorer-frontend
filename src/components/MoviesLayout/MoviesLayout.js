import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesLayout.css';

function MoviesLayout({ logged }) {
  return (
    <>
      <Header headerClassName='header_movies' />
      <Outlet />
      <Footer />
    </>
  );
}
export default MoviesLayout;
