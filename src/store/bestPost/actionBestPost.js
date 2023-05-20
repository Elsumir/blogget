import {URL_API} from '../../api/const';
import axios from 'axios';

export const BEST_REQUEST = 'BEST_REQUEST';
export const BEST_REQUEST_SUCCESS = 'BEST_REQUEST_SUCCESS';
export const BEST_REQUEST_ERROR = 'BEST_REQUEST_ERROR';
export const BEST_REQUEST_SUCCESS_AFTER = 'BEST_REQUEST_SUCCESS_AFTER';

export const bestRequest = () => ({
  type: BEST_REQUEST,
});
export const bestRequestSuccess = (data) => ({
  type: BEST_REQUEST_SUCCESS,
  data: data.children,
  after: data.after,
});
export const bestRequestSuccessAfter = (data) => ({
  type: BEST_REQUEST_SUCCESS_AFTER,
  data: data.children,
  after: data.after,
});
export const bestRequestError = (error) => ({
  type: BEST_REQUEST_ERROR,
  error,
});

export const bestRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().best.after;
  const loading = getState().best.loading;
  const isLast = getState().best.isLast;

  if (!token || loading || isLast) return;
  dispatch(bestRequest());

  axios(`${URL_API}/best?limit=5&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(bestRequestSuccessAfter(data.data));
      } else {
        dispatch(bestRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      dispatch(bestRequestError(err.message));
      console.err(err);
    });
};
