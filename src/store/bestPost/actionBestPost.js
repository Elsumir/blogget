import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const bestRequestAsync = createAsyncThunk(
  'best/fetch',
  (newPage, TK) => {
    const page = newPage || TK.getState().best.page;
    const token = TK.getState().token.token;
    const after = TK.getState().best.after;
    const isLast = TK.getState().best.isLast;

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
      .catch((err) => {
        ({error: err});
      });
  }
);
