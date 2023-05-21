import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{data: post}],
              },
            },
            {
              data: {children},
            },
          ],
        }) => {
          // const post = data[0].data.children[0].data;
          // const children = data[1].data.children;
          const comments = children.map((item) => item.data);

          return {post, comments};
        }
      )
      .catch((error) => ({error}));
  }
);
