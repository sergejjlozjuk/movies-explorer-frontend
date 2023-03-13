import { Link, useLocation } from 'react-router-dom';
import './NavigationMain.css';
import icon from '../../images/account_icon.svg';

function NavigationMain() {
  const location = useLocation().pathname;
  function openBurger() {
    document.querySelector('.header').classList.toggle('active');
    document
      .querySelector('.burger__container')
      .classList.toggle('burger__container_active');
    document.querySelector('.burger__button').classList.toggle('active');
  }
  return (
    <div className='burger__container'>
      <div className='burger__button' onClick={openBurger}>
        <span></span>
      </div>
      <nav className='navigation-main'>
        <ul className='navigation-main__container'>
          <li className='navigation-main__item'>
            <Link
              to='/'
              className='navigation-main__link navigation-main__link_home'
            >
              Главная
            </Link>
          </li>
          <li className='navigation-main__item'>
            <Link
              to='/movies'
              className={`navigation-main__link navigation-main__link_film ${
                location === '/movies' ? 'link_active' : ''
              }`}
            >
              Фильмы
            </Link>
          </li>
          <li className='navigation-main__item'>
            <Link
              to='/saved-movies'
              className={`navigation-main__link navigation-main__link_saved-film ${
                location === '/saved-movies' ? 'link_active' : ''
              }`}
            >
              Сохраненные фильмы
            </Link>
          </li>
          <li className='navigation-main__item'>
            <Link
              to='/profile'
              className='navigation-main__link navigation-main__link_account'
            >
              <span>Аккаунт</span>
              <div className='navigation-main__link_account-image'>
                <img src={icon} alt='иконка юзера' />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMain;
