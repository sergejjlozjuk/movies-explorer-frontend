class Api {
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  _request(url, options) {
    return fetch(
      `https://api.movies.sergejj.nomoredomains.work${url}`,
      options
    );
  }
  registration({ email, name, password }) {
    return this._request('/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then(this._getResponse);
  }
  login({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._getResponse);
  }
  logout() {
    return this._request('/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._getResponse);
  }
  checkToken() {
    return this._request('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._getResponse);
  }
  updateUser(data) {
    const { name, email } = data;
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponse);
  }
  saveMovie(movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    } = movie;
    return this._request('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      }),
      credentials: 'include',
    }).then(this._getResponse);
  }
  getSavedMovies() {
    return this._request('/movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._getResponse);
  }
  deleteMovie(card) {
    console.log(card.movieId);
    return this._request(`/movies/${card.movieId || card.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }
}
const api = new Api();
export default api;
