import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, deletefilm }) {
  return (
    <section className='all-movies'>
      <hr className='all-movies__line'></hr>
      <ul className='all-movies__list'>
        {movies.map((film) => {
          if(film._id){
            return (<MoviesCard card={film} key={film._id} deletefilm={deletefilm}/>)
          } return (<MoviesCard card={film} key={film.id} />)})}
      </ul>
    </section>
  );
}
export default MoviesCardList;
