import React from 'react';
import PropTypes from 'prop-types';
import {useBestPost} from '../hooks/useBestPost';

export const BestContext = React.createContext({});

export const BestContextProvider = ({children}) => {
  const [best] = useBestPost();

  return <BestContext.Provider value={{best}}>{children}</BestContext.Provider>;
};

BestContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
