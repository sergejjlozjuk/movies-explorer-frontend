import { Routes, Route } from 'react-router-dom';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MainLayout from '../MainLayout/MainLayout';
import MoviesLayout from '../MoviesLayout/MoviesLayout';
import AuthLayout from '../AuthLayout/AuthLayout';
import NotFound from '../NotFound/NotFound';
import ProfileLayout from '../ProfileLayout/ProfileLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/profile' element={<ProfileLayout />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path='/' element={<MoviesLayout />}>
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
