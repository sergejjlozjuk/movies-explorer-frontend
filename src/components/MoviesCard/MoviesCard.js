import './MoviesCard.css';
import api from '../../utils/MainApi';
import { useEffect, useState } from 'react';

function MoviesCard({ card, deletefilm }) {
  const [savedFilms, setSavedFilms] = useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  const [savedMovie, setSavedMovie] = useState(false);
  useEffect(() => {
    savedFilms.find((film) => film.movieId === card.id) || card.owner
      ? setSavedMovie(true)
      : setSavedMovie(false);
  }, [savedFilms, card]);
  let image;
  card._id
    ? (image = card.image)
    : (image = `https://api.nomoreparties.co/${card.image.url}`);
  function calcDuration() {
    const h = Math.round(card.duration / 60);
    const m = card.duration % 60;
    return `${h ? `${h} ч` : ''} ${m} м`;
  }
  function handlerSave() {
    if (savedMovie) {
      api
        .deleteMovie(card)
        .then((res) => {
          if (res) {
            setSavedMovie(!savedMovie);
            deletefilm(card)
          }
        })
        .catch((err) => console.log(err));
    } else {
      api
        .saveMovie(card)
        .then((res) => {
          if (res) {
            setSavedMovie(!savedMovie);
          }
        })
        .catch((err) => console.log(err));
    }
  }
  function handlerThumbNail() {
    window.open(card.trailerLink, '_blank');
  }
  return (
    <li className='all-movies__item'>
      <article className='movie'>
        <h1 className='movie__title'>{card.nameRU}</h1>
        <h3 className='movie__duration'>{calcDuration()}</h3>
        <label className='movie__save' id='label'>
          <input
            type='checkbox'
            id='checkbox'
            checked={savedMovie}
            onChange={handlerSave}
          ></input>
          <div className='movie__save_bookmark'>
            {card.owner ? (
              <svg
                width='8'
                height='8'
                viewBox='0 0 8 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.00049 4.94287L6.35754 7.29992L7.4182 6.23926L5.06115 3.88221L7.30041 1.64295L6.23975 0.582291L4.00049 2.82155L1.76134 0.582406L0.700684 1.64307L2.93983 3.88221L0.582895 6.23914L1.64355 7.2998L4.00049 4.94287Z'
                  fill='white'
                />
              </svg>
            ) : (
              <svg
                id='bookmark'
                width='10'
                height='14'
                viewBox='0 0 10 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.5 1.9C0.5 1.40294 0.902944 1 1.4 1H8.6C9.09706 1 9.5 1.40294 9.5 1.9V12.4789C9.5 12.5552 9.41798 12.6034 9.35133 12.5662L6.21676 10.8198C5.46033 10.3984 4.53968 10.3984 3.78324 10.8198L0.648671 12.5662C0.582015 12.6034 0.5 12.5552 0.5 12.4789V1.9Z'
                  stroke='#424242'
                />
              </svg>
            )}
          </div>
        </label>
        <img
          className='movie__thumbnail'
          src={image}
          alt={card.nameRU}
          onClick={handlerThumbNail}
        />
      </article>
    </li>
  );
}
export default MoviesCard;
