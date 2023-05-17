import {
  BEST_REQUEST,
  BEST_REQUEST_ERROR,
  BEST_REQUEST_SUCCESS,
} from './actionBestPost';

const initialState = {
  loading: false,
  data: {},
  error: '',
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
      };
    case BEST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
