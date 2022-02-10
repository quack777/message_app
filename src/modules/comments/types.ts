import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommentsAction = ActionType<typeof actions>;

export type CommentInfo = {
  userid: number;
  userName: string;
  profileImage: string;
  content: string;
  data: string;
  sendDate: string;
};

export type CommentsInfoState = CommentInfo[];
