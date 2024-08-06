import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RestApi } from '../api/RestApi.js';

const UserContext = React.createContext(null);
export const useUserContext = () => useContext(UserContext);

/** @type {React.FC<React.PropsWithChildren>} */
export const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);

  const login = useCallback(async (email, password) => {
    const user = await RestApi.instance.login(email, password);
    setUser(user);
  }, []);

  const logout = useCallback(async () => {
    await RestApi.instance.logout();
  }, []);

  const fetch = useCallback(async () => {
    setUser(await RestApi.instance.user.me());
  }, []);

  useEffect(() => {
    RestApi.instance
      .autoLogin()
      .then(setUser)
      .finally(() => setUser(null));
  }, []);

  const ContextValue = {
    user,
    login,
    logout,
    fetch,
  };

  return (
    <UserContext.Provider value={ContextValue}>
      {user !== undefined && props.children}
    </UserContext.Provider>
  );
};
