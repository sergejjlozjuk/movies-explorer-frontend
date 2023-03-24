import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <section className='all-movies'>
      <hr className='all-movies__line'></hr>
      <ul className='all-movies__list'>
        {movies.map((film) => {
          if(film._id){
            return (<MoviesCard card={film} key={film._id} />)
          } return (<MoviesCard card={film} key={film.id} />)})}
      </ul>
    </section>
  );
}
export default MoviesCardList;
