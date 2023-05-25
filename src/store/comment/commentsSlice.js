import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './actionComment';

const initialState = {
  loading: true,
  post: {},
  comments: [],
  error: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.loading = false;
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default commentsSlice.reducer;
