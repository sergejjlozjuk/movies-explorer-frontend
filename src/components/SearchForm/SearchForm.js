import './SearchForm.css';
import search from '../../images/search.svg';

function SearchForm({ formName, onSubmit, handlerShort }) {
  return (
    <section className='search'>
      <form className='form' name={formName} onSubmit={onSubmit}>
        <input className='form__input' placeholder='Фильм' name='search'></input>
        <button className='form__button' type='submit'>
          <img className='from__button_icon' src={search} alt='search' />
        </button>
      </form>
      <div className='checkbox'>
        <span className='checkbox__title'>Короткометражки</span>
        <label className='checkbox__toggle'>
          <input type='checkbox' name='short' onClick={handlerShort}/>
          <span className='slider round'></span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
