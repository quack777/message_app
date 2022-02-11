import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommentsAction = ActionType<typeof actions>;
export type ResponseAction = ActionType<typeof actions>;

export type CommentInfo = {
  userid: number;
  messageId: number;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
  responseId: number | null;
};

export type CommentsInfoState = CommentInfo[];

export type ResponseState = {
  responseId: null | number;
  responseActive: boolean;
};
