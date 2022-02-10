import { createReducer } from 'typesafe-actions';
import { CommentsAction, CommentsInfoState } from './types';
import { ADD_COMMENT, DELETE_COMMENT, RESPONSE_COMMENT } from './actions';

const initialState: CommentsInfoState = [
  {
    userid: 1,
    messageId: 1,
    userName: '춘식',
    profileImage: './img/profile_yongwoo.png',
    content: '안녕하세요! 춘식입니다.',
    date: '2021-02-10 23:26:30',
    responseId: null,
  },
  {
    userid: 2,
    messageId: 2,
    userName: '은총',
    profileImage: './img/profile_eunchong.jpg',
    content: '안녕하세요! 은총입니다!',
    date: '2021-02-10 23:26:32',
    responseId: null,
  },
  {
    userid: 3,
    messageId: 3,
    userName: '병현',
    profileImage: './img/profile_byeonghyeon.jpeg',
    content: '안녕하세요! 병현이예요~',
    date: '2021-02-10 23:26:34',
    responseId: null,
  },
  {
    userid: 2,
    messageId: 4,
    userName: '은총',
    profileImage: './img/profile_eunchong.jpg',
    content: '은총입니다..!',
    date: '2021-02-10 23:26:35',
    responseId: null,
  },
  {
    userid: 1,
    messageId: 5,
    userName: '춘식',
    profileImage: './img/profile_yongwoo.png',
    content: '춘식스',
    date: '2021-02-10 23:26:36',
    responseId: null,
  },
];

const comments = createReducer<CommentsInfoState, CommentsAction>(initialState, {
  [ADD_COMMENT]: (state, action) => state.concat(action.payload),
  [DELETE_COMMENT]: (state, action) => state.filter((info) => info.messageId !== action.payload),
  //   [RESPONSE_COMMENT]: (state, action) => state.concat(action.payload),
});

export default comments;
