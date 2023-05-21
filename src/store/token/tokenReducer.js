import {getToken} from '../../api/token';

const initialState = {
  token: getToken(),
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
