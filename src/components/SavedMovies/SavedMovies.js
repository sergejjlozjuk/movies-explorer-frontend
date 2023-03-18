import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList />
      </main>
    </>
  );
}

export default SavedMovies;