import './Portfolio.css';
import arrow from '../../images/arrow.svg';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h1 className='portfolio__header'>Портфолио</h1>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__item_link'
            href='https://github.com/sergejjlozjuk/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item_link'
            href='https://github.com/sergejjlozjuk/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item_link'
            href='https://github.com/sergejjlozjuk/react-mesto-auth'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
