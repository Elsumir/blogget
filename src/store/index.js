import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './commentReducer';
import {tokenReducer} from './tokenReducer';
import {tokenMiddleware} from './tokenReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {bestReducer} from './bestPost/bestPostReducer';
import {commentsReducer} from './comment/commentsReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
  auth: authReducer,
  best: bestReducer,
  comments: commentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
