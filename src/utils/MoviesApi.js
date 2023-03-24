class MoviesApi {
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  get() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponse);
  }
  search(key, short) {
    const films = JSON.parse(localStorage.getItem('films'));
    let filteredFilms = films.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(key.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(key.toLowerCase())
    );
    if (short) {
      filteredFilms = filteredFilms.filter((film) => film.duration < 40);
    }
    localStorage.setItem('filtered', JSON.stringify(filteredFilms));
  }
}
const moviesApi = new MoviesApi();
export default moviesApi;
