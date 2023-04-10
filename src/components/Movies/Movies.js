import { useEffect, useState } from 'react';
import {
  RENDERED_CARDS_WIDTH_1280,
  RENDERED_CARDS_WIDTH_320,
  RENDERED_CARDS_WIDTH_768,
} from '../../constants/constants';
import moviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchError from '../SearchError/SearchError';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  const [searchError, setSearchError] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [listView, setListView] = useState({
    list: RENDERED_CARDS_WIDTH_1280.default,
    more: RENDERED_CARDS_WIDTH_1280.more,
  });
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [searchParams, setSearchParams] = useState({
    shortFilm: false,
    filteredFilms: [],
    key: '',
  });
  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    if (width < 769 && width > 481) {
      setListView({
        list: RENDERED_CARDS_WIDTH_768.default,
        more: RENDERED_CARDS_WIDTH_768.more,
      });
    }
    if (width < 481 && width > 319) {
      setListView({
        list: RENDERED_CARDS_WIDTH_320.default,
        more: RENDERED_CARDS_WIDTH_320.more,
      });
    }
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [width]);
  useEffect(() => {
    const params = JSON.parse(localStorage.getItem('searchParams'));
    if (params) {
      return setSearchParams(params);
    } else {
      setSearchParams({
        shortFilm: false,
        filteredFilms: [],
        key: '',
      });
    }
  }, []);
  useEffect(() => {
    setRenderedFilms(searchParams.filteredFilms.slice(0, listView.list));
    if (searchParams.filteredFilms.length) {
      localStorage.setItem('searchParams', JSON.stringify(searchParams));
    }
  }, [searchParams, listView]);
  function resizeWindow() {
    setWidth(window.innerWidth);
  }
  function handleShort() {
    setSearchParams({
      ...searchParams,
      shortFilm: !searchParams.shortFilm,
    });
  }
  function handleKey(event) {
    setSearchParams({
      ...searchParams,
      key: event.target.value,
    });
  }
  function handleMoreFilms() {
    setListView({
      ...listView,
      list: listView.list + listView.more,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (searchParams.key === '') {
      setSearchError('Нужно ввести ключевое слово');
    } else {
      setSearchError('');
      moviesApi.search(searchParams.key, searchParams.shortFilm);
      const filtered = JSON.parse(localStorage.getItem('filtered'));
      if (filtered.length === 0) {
        setSearchError('Ничего не найдено');
      }
      setSearchParams({
        ...searchParams,
        filteredFilms: filtered,
      });
    }
  }
  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        handleShort={handleShort}
        handleKey={handleKey}
        searchKey={searchParams.key}
      ></SearchForm>
      {searchError ? (
        <SearchError error={searchError} />
      ) : (
        <>
          <MoviesCardList movies={renderedFilms} />
          {listView.list < searchParams.filteredFilms.length ? (
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
