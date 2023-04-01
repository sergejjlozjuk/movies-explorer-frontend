import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { SHORT_FILM_DURATION } from '../../constants/constants';
import api from '../../utils/MainApi';

function SavedMovies({ logged }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useState({
    key: '',
    shortSwitcher: false,
  });
  useEffect(() => {
    api
      .getSavedMovies()
      .then((res) => {
        if (res) {
          if (logged) {
            localStorage.setItem('savedMovies', JSON.stringify(res));
            setSavedMovies(res);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [logged]);
  function handeleSearch(event) {
    event.preventDefault();
    let filtered = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchParams.key) ||
        movie.nameEN.toLowerCase().includes(searchParams.key)
    );
    if (searchParams.shortSwitcher) {
      filtered = filtered.filter(
        (movie) => movie.duration < SHORT_FILM_DURATION
      );
    }
    setFiltered(filtered);
  }
  function handleShort() {
    setSearchParams({
      ...searchParams,
      shortSwitcher: !searchParams.shortSwitcher,
    });
  }
  function handleKey(event) {
    setSearchParams({
      ...searchParams,
      key: event.target.value.toLowerCase(),
    });
  }
  return (
    <>
      <main className='saved-movies'>
        <SearchForm
          onSubmit={handeleSearch}
          handleKey={handleKey}
          handleShort={handleShort}
        />
        <MoviesCardList movies={filtered.length ? filtered : savedMovies} />
      </main>
    </>
  );
}

export default SavedMovies;
