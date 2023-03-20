import { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../../utils/MainApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children, logged }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if(logged)
    api
      .checkToken()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [logged]);
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
