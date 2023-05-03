import style from './Layout.module.css';
import React from 'react';
import PropTypes from 'prop-types';
console.log(style);

export const Layout = ({children}) => {
  return <div className={style.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
