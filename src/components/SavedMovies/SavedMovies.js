import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function SavedMovies({ setPreloader }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchParams, setSearchParams] = useState({
    key: '',
    shortSwitcher: false,
  });
  useEffect(() => {
    setPreloader(false);
    api
      .getSavedMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem('savedMovies', JSON.stringify(res));
          setSavedMovies(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(setPreloader(true));
  }, [setPreloader]);
  function handeleSearch(event) {
    event.preventDefault();
    let filtered = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchParams.key) ||
        movie.nameEN.toLowerCase().includes(searchParams.key)
    );
    if(searchParams.shortSwitcher){
      filtered = filtered.filter((movie) => movie.duration < 40)
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
