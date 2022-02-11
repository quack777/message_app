import { createReducer } from 'typesafe-actions';
import { CommentsAction, CommentsInfoState } from './types';
import { ADD_COMMENT, DELETE_COMMENT, RESPONSE_COMMENT } from './actions';

const initialState: CommentsInfoState = [
  {
    userid: 1,
    messageId: 1,
    userName: '춘식',
    profileImage: './img/profile_yongwoo.png',
    content: '네이버로 보내줘~',
    date: '2021-02-10 23:26:30',
    responseId: null,
  },
  {
    userid: 2,
    messageId: 2,
    userName: '죠르디',
    profileImage: './img/profile_eunchong.jpg',
    content: '네이버ㅋㅋ',
    date: '2021-02-10 23:26:32',
    responseId: null,
  },
  {
    userid: 3,
    messageId: 3,
    userName: '어피치',
    profileImage: './img/profile_byeonghyeon.jpeg',
    content: '응 안가~',
    date: '2021-02-10 23:26:34',
    responseId: null,
  },
  {
    userid: 2,
    messageId: 4,
    userName: '죠르디',
    profileImage: './img/profile_eunchong.jpg',
    content: '왜죠..?',
    date: '2021-02-10 23:26:35',
    responseId: null,
  },
  {
    userid: 1,
    messageId: 5,
    userName: '춘식',
    profileImage: './img/profile_yongwoo.png',
    content: '예이~🎉',
    date: '2021-02-10 23:26:36',
    responseId: null,
  },
];

const comments = createReducer<CommentsInfoState, CommentsAction>(initialState, {
  [ADD_COMMENT]: (state, action) => state.concat(action.payload),
  [DELETE_COMMENT]: (state, action) => state.filter((info) => info.messageId !== action.payload),
});

export default comments;
