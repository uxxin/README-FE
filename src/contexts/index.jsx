import React from 'react';
import { UserContextProvider } from './UserContext.jsx';

/** @type {React.FC<React.PropsWithChildren>} */
export const AppContextProviders = (props) => {
  return <UserContextProvider>{props.children}</UserContextProvider>;
};
