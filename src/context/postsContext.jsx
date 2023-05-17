import React from 'react';

export const BestContext = React.createContext({});

export const BestContextProvider = ({children}) => {
  <BestContext.Provider>{children}</BestContext.Provider>;
};
