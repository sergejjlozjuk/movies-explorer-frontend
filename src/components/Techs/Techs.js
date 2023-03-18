import './Techs.css'
function Techs() {
  return (
    <section className='techs'>
      <h1 className='techs__header'>Технологии</h1>
      <hr className='techs__line'></hr>
      <h2 className='techs__about'>7 технологий</h2>
      <h3 className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h3>
      <ul className='techs__list'>
        <li className='techs__list-item'>HTML</li>
        <li className='techs__list-item'>CSS</li>
        <li className='techs__list-item'>JS</li>
        <li className='techs__list-item'>React</li>
        <li className='techs__list-item'>Git</li>
        <li className='techs__list-item'>Express js</li>
        <li className='techs__list-item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
