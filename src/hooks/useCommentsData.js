import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.token);
  const [comments, setCommentsData] = useState([]);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {children},
          },
        ]) => {
          const comments = children.map((item) => item.data);
          setCommentsData([post, comments]);
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [comments];
};

useCommentsData.propTypes = {
  token: PropTypes.string,
};