import { createReducer } from 'typesafe-actions';
import { CommentsAction, CommentsInfoState } from './types';
import { ADD_COMMENT, DELETE_COMMENT, RESPONSE_COMMENT } from './actions';

const initialState: CommentsInfoState = [];

const comments = createReducer<CommentsInfoState, CommentsAction>(initialState, {
  [ADD_COMMENT]: (state, action) => state.concat(action.payload),
  [DELETE_COMMENT]: (state, action) => state.filter((info) => info.userid !== action.payload),
  //   [RESPONSE_COMMENT]: (state, action) => state.concat(action.payload),
});

export default comments;
