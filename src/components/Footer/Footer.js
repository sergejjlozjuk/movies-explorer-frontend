import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__header'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <hr className='footer__line'></hr>
      <span className='footer__date'>&copy; {new Date().getFullYear()}</span>
      <ul className='footer__list'>
        <li className='footer__item'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
        </li>{' '}
        <li className='footer__item'>
          <a
            className='footer__link'
            href='https://github.com/topics/yandex-praktikum'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
