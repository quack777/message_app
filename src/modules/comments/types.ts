import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommentsAction = ActionType<typeof actions>;

export type CommentInfo = {
  userid: number;
  messageId: number;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
};

export type CommentsInfoState = CommentInfo[];
