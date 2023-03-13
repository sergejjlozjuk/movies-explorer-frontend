import './AboutMe.css';
import user from '../../images/user.jpeg';

function AboutMe() {
  return (
    <section className='user'>
      <h1 className='user__header'>Студент</h1>
      <hr className='user__line'></hr>
      <h2 className='user__name'>Виталий</h2>
      <h3 className='user__about'>Фронтенд-разработчик, 26 лет</h3>
      <h4 className='user__text'>
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
      </h4>
      <a className='user__source' href='https://github.com/sergejjlozjuk' target="_blank" rel="noreferrer">Github</a>
      <img className='user__avatar' src={user} alt='avatar'></img>
    </section>
  );
}

export default AboutMe;
