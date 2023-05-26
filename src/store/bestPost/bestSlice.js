import {createSlice} from '@reduxjs/toolkit';
import {bestRequestAsync} from './actionBestPost';

const initialState = {
  data: [],
  error: '',
  after: '',
  page: '',
  isLast: false,
  loading: false,
};

export const bestSlice = createSlice({
  name: 'best',
  initialState,
  reducers: {
    changePage: (state, action) => {
      console.log(action);
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.data = [];
    },
  },
  extraReducers: {
    [bestRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [bestRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.children];
      state.after = action.payload.after;
      state.error = '';
      state.isLast = !action.payload.after;
    },
    [bestRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default bestSlice.reducer;
