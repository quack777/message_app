import { createAction } from 'typesafe-actions';
import type { CommentInfo } from './types';

export const ADD_COMMENT = 'comments/ADD_COMMENT';
export const DELETE_COMMENT = 'comments/DELETE_COMMENT';
export const RESPONSE_COMMENT = 'comments/RESPONSE_COMMENT';

export const addComment = createAction(ADD_COMMENT)<CommentInfo>();
export const deleteComment = createAction(DELETE_COMMENT)<number>();
// export const responseComment = createAction(RESPONSE_COMMENT)<CommentInfo, ResponseInfo>();

// export const addComment =(commentInfo:CommentInfo)=>({
//     type:ADD_COMMENT,
//     payload:commentInfo
// })
