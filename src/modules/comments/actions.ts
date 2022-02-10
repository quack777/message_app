import { createAction } from 'typesafe-actions';
import type { CommentInfo } from './types';

export const ADD_COMMENT = 'comments/ADD_COMMENT' as const;
export const DELETE_COMMENT = 'comments/DELETE_COMMENT';
export const RESPONSE_COMMENT = 'comments/RESPONSE_COMMENT';

let nextId = 5;

export const addComment = (commentInfo: CommentInfo) => ({
    type: ADD_COMMENT,
    payload: {
        ...commentInfo,
        messageId: ++nextId
    }
})

export const deleteComment = createAction(DELETE_COMMENT)<number>();
// export const responseComment = createAction(RESPONSE_COMMENT)<CommentInfo, ResponseInfo>();
