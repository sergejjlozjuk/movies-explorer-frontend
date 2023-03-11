import './Promo.css';
import promo from '../../images/promo.svg'

function Promo() {
  return (
    <section className='promo'>
    <h1 className='promo__description'>
    Учебный проект студента факультета Веб&#8209;разработки.
    </h1>
    <h2 className='promo__text'>
    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
    </h2>
    <button className='promo__button'>
        Узнать больше
    </button>
    <img className='promo__image' src={promo} alt='web'></img>
    </section>
  );
}

export default Promo;
