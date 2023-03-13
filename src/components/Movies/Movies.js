import MoviesCardList from '../MoviesCardList/MovieseCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button className='movies__button-more'>Ещё</button>
    </main>
  );
}

export default Movies;
