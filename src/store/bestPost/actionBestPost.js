import {URL_API} from '../../api/const';
import axios from 'axios';

export const BEST_REQUEST = 'BEST_REQUEST';
export const BEST_REQUEST_SUCCESS = 'BEST_REQUEST_SUCCESS';
export const BEST_REQUEST_ERROR = 'BEST_REQUEST_ERROR';

export const bestRequest = () => ({
  type: BEST_REQUEST,
});
export const bestRequestSuccess = (data) => ({
  type: BEST_REQUEST_SUCCESS,
  data,
});
export const bestRequestError = (error) => ({
  type: BEST_REQUEST_ERROR,
  error,
});

export const bestRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(bestRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const item = data.data.children;
      dispatch(bestRequestSuccess(item));
    })
    .catch((err) => {
      console.err(err);
      dispatch(bestRequestError(err.message));
    });
};
