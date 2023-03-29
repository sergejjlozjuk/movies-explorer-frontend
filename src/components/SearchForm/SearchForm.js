import './SearchForm.css';
import search from '../../images/search.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ formName, onSubmit, handleShort, handleKey }) {
  const location = useLocation();
  useEffect(() => {
    if ((location.pathname === '/movies')) {
      const checkbox = document.getElementsByName('short')[0];
      const params = JSON.parse(localStorage.getItem('searchParams'));
      params ? checkbox.checked = params.shortFilm : checkbox.checked = false
    }
  }, [location]);
  return (
    <section className='search'>
      <form className='form' name={formName} onSubmit={onSubmit}>
        <input
          className='form__input'
          placeholder='Фильм'
          name='search'
          onChange={handleKey}
        ></input>
        <button className='form__button' type='submit'>
          <img className='from__button_icon' src={search} alt='search' />
        </button>
      </form>
      <div className='checkbox'>
        <span className='checkbox__title'>Короткометражки</span>
        <label className='checkbox__toggle'>
          <input type='checkbox' name='short' onClick={handleShort} />
          <span className='slider round'></span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
