import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function SavedMovies({ setPreloader }) {
  const [savedMovies, setSavedMovies] = useState([]);
  useEffect(() => {
    setPreloader(false)
    api
      .getSavedMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem('savedMovies', JSON.stringify(res));
          setSavedMovies(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(setPreloader(true))
  }, [setPreloader]);
  return (
    <>
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
    </>
  );
}

export default SavedMovies;
