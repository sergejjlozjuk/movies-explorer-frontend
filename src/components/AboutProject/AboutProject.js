import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
    <h1 className='about-project__description'>
        О проекте
    </h1>
    <hr className='about-project__line'></hr>
    <h2 className='about-project__plan'>
    Дипломный проект включал 5 этапов
    </h2>
    <h3 className='about-project__plan_text'>
    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
    </h3>
    <h2 className='about-project__time'>
    На выполнение диплома ушло 5 недель
    </h2>
    <h3 className='about-project__time_text'>
    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
    </h3>
    <div className='time-line'>
        <div className='time-line__backend'>1 неделя</div>
        <div className='time-line__frontend'>4 недели</div>
        <h4 className='time-line__description-backend'>Back-end</h4>
        <h4 className='time-line__description-frontend'>Front-end</h4>
    </div>
    </section>
  );
}

export default AboutProject;
