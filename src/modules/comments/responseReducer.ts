import { createReducer } from 'typesafe-actions';
import { RESPONSE_COMMENT } from './actions';
import { ResponseAction, ResponseState } from './types';

const initailState: ResponseState = {
  responseId: null,
  responseActive: false,
};

const response = createReducer<ResponseState, ResponseAction>(initailState, {
  [RESPONSE_COMMENT]: (state, action) => ({
    ...state,
    responseId: action.payload,
    responseActive: !state.responseActive,
  }),
});

export default response;
