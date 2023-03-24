import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function SavedMovies({setPreloader}) {
  const [savedMovies, setSavedMovies] = useState([])
  useEffect(()=>{
    setPreloader(false)
    api.getSavedMovies()
    .then(res => setSavedMovies(res))
    .catch(err=> console.log(err))
    .finally(setPreloader(true))
  }, [savedMovies, setPreloader])
  return (
    <>
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList movies={savedMovies}/>
      </main>
    </>
  );
}

export default SavedMovies;
