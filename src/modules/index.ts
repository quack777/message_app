import { combineReducers } from 'redux';
import comments from './comments/reducer';
import response from './comments/responseReducer';

const rootReducer = combineReducers({ comments, response });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
