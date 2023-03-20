class Api {
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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
  logout(){
    return this._request('/signout', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then(this._getResponse)
  }
  checkToken(){
    return this._request('/users/me', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._getResponse)
  }
}
const api = new Api();
export default api;
