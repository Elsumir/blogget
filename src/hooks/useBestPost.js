import PropTypes from 'prop-types';
import {useEffect, useContext, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContex';

export const useBestPost = () => {
  const {token} = useContext(tokenContext);
  const [best, setBest] = useState({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const item = data.data.children;

        setBest(item);
      })
      .catch((err) => {
        console.err(err);
      });
  }, [token]);
  return [best];
};

useBestPost.propTypes = {
  token: PropTypes.string,
};
