import { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../../utils/MainApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children, logged }) => {
  const [user, setUser] = useState({});
  function signout (){
    setUser({})
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('searchParams')
    localStorage.removeItem('filtered')
    localStorage.removeItem('films')
  }
  function setNewUser (data) {
    setUser(data)
  }
  useEffect(() => {
    api
      .checkToken()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [logged]);
  const value = {user, logged, signout, setNewUser}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
