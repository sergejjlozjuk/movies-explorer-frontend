import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import ProtectedRoutes from '../HOC/ProtectedRoutes';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import { AuthProvider } from '../HOC/AuthProvider';
import api from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function App() {
  const [logged, setLogged] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setPreloader(false);
    api
      .checkToken()
      .then((res) => {
        if (res) {
          setLogged(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(true));
  }, []);
  return (
    <>
      <Preloader hidden={preloader} />
      <div className='App'>
        <AuthProvider logged={logged}>
          <Routes>
            <Route
              path='/profile'
              element={
                <ProtectedRoutes
                  setLogged={setLogged}
                  logged={logged}
                  element={ProfileLayout}
                />
              }
            />
            <Route path='/' element={<MoviesLayout logged={logged} />}>
              <Route
                path='movies'
                element={<ProtectedRoutes element={Movies} logged={logged} />}
              />
              <Route
                path='saved-movies'
                element={
                  <ProtectedRoutes
                    element={SavedMovies}
                    logged={logged}
                    setPreloader={setPreloader}
                  />
                }
              />
            </Route>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Main />} />
            </Route>
            <Route path='/' element={<AuthLayout />}>
              <Route path='signin' element={<Login setLogged={setLogged}  setPreloader={setPreloader}/>} />
              <Route path='signup' element={<Register setLogged={setLogged} setPreloader={setPreloader}/>} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
