import { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../../utils/MainApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children, logged }) => {
  const [user, setUser] = useState({});
  function signout (){
    setUser({})
  }
  useEffect(() => {
    api
      .checkToken()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [logged]);
  const value = {user, logged, signout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
