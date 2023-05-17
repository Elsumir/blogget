import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR,
} from './actionComment';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: '',
      };

    default:
      return state;
  }
};
