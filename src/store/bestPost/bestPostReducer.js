import {
  BEST_REQUEST,
  BEST_REQUEST_ERROR,
  BEST_REQUEST_SUCCESS,
  BEST_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE,
} from './actionBestPost';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
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
        isLast: !action.after,
      };
    case BEST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    case BEST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
