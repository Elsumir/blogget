import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const bestRequestAsync = createAsyncThunk(
  'best/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().best.page;
    const token = getState().token.token;
    const after = getState().best.after;
    const isLast = getState().best.isLast;

    if (!token || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then(({data}) => data.data)
      .catch((error) => {
        error;
      });
  }
);
