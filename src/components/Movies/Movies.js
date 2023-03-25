import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchError from '../SearchError/SearchError';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  const [searchError, setSearchError] = useState('');
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [listView, setListView] = useState({ list: 12, more: 3 });
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [short, setShort] = useState(false);
  function handlerShort() {
    setShort(!short);
  }
  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    if (width < 769 && width > 481) {
      setListView({ list: 8, more: 2 });
    }
    if (width < 481 && width > 319) {
      setListView({ list: 5, more: 1 });
    }
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [width]);
  useEffect(() => {
    moviesApi
      .get()
      .then((res) => {
        localStorage.setItem('films', JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    setRenderedFilms(filteredFilms.slice(0, listView.list));
  }, [filteredFilms, listView]);
  function resizeWindow() {
    setWidth(window.innerWidth);
  }
  function handleMoreFilms() {
    setListView({
      ...listView,
      list: listView.list + listView.more,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const key = form.search.value;
    if (key === '') {
      setSearchError('Нужно ввести ключевое слово');
    } else {
      setSearchError('');
      moviesApi.search(key, short);
      const filteredFilms = JSON.parse(localStorage.getItem('filtered'));
      if (filteredFilms.length === 0) {
        setSearchError('Ничего не найдено');
      }
      setFilteredFilms(filteredFilms);
    }
    form.reset();
  }
  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        handlerShort={handlerShort}
      ></SearchForm>
      {searchError ? (
        <SearchError error={searchError} />
      ) : (
        <>
          <MoviesCardList movies={renderedFilms} />
          {listView.list < filteredFilms.length ? (
            <button className='movies__button-more' onClick={handleMoreFilms}>
              Ещё
            </button>
          ) : null}
        </>
      )}
    </main>
  );
}

export default Movies;
