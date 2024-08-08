import React, { useCallback, useContext, useState } from 'react';
import { PostAxiosInstance } from '../axios/axios.method.js';

const UserContext = React.createContext(null);
export const useUserContext = () => useContext(UserContext);

/** @type {React.FC<React.PropsWithChildren>} */
export const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);

  const login = useCallback(async (email, password) => {
    const user = await PostAxiosInstance('/user/login', {
      email: email,
      password: password,
    });
    setUser(user);
  }, []);

  const ContextValue = {
    user,
    login,
  };

  return (
    <UserContext.Provider value={ContextValue}>
      {user !== undefined && props.children}
    </UserContext.Provider>
  );
};
