import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { SHORT_FILM_DURATION } from '../../constants/constants';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchParams, setSearchParams] = useState({
    key: '',
    shortSwitcher: false,
  });
  useEffect(() => {
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
  }, []);
  function handeleSearch(event) {
    event.preventDefault();
    let filtered = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchParams.key) ||
        movie.nameEN.toLowerCase().includes(searchParams.key)
    );
    if(searchParams.shortSwitcher){
      filtered = filtered.filter((movie) => movie.duration < SHORT_FILM_DURATION)
    } setSavedMovies(filtered)
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
        <MoviesCardList movies={savedMovies} />
      </main>
    </>
  );
}

export default SavedMovies;
