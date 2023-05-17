import React from 'react';
import PropTypes from 'prop-types';

export const authContext = React.createContext({});

export const AuthContextProvider = ({children}) => {
  console.log();
  return <authContext.Provider>{children}</authContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
