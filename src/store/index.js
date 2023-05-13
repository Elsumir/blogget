import {createStore} from 'redux';
import {getToken, setToken} from '../api/token';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  comment: 'Привет редакс',
  token: getToken(),
};

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});
export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});
export const deleteToken = (delToken) => ({
  type: DELETE_COMMENT,
  token: '',
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };
    case DELETE_COMMENT:
      setToken('');
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
export const store = createStore(rootReducer);
