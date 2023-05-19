import {
  BEST_REQUEST,
  BEST_REQUEST_ERROR,
  BEST_REQUEST_SUCCESS,
  BEST_REQUEST_POSTS,
} from './actionBestPost';

const initialState = {
  loading: false,
  data: [],
  posts: [],
  error: '',
  after: '',
};

export const bestReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case BEST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,

        data: action.data,
        after: action.after,
      };
    case BEST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case BEST_REQUEST_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};
