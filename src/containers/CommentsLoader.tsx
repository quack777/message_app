import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment } from '../modules/comments';
import ChatFromTemplate from '../components/ChatFromTemplate';
import ChatForm from '../components/ChatForm';
// import { createDate } from '../utils/createDate';
import userInfo from '../data/tmpUser.json';
import type { RootState } from '../modules/index';
import type { CommentInfo } from '../modules/comments';
import SendDate from '../utils/SendDate';

const CommentsLoader: FC = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();

  const addCommentInfo = (content: string, keyCode: string) => {
    if (content === '') return;

    if (keyCode === 'Enter' || keyCode === '') {
      const { user } = userInfo;
      const messageId = 0;
      const date = SendDate();
      // const responseId: 답장 버튼 클리식 여기주기 답장 Id주기;

      const commentInfo: CommentInfo = {
        ...user,
        date,
        content,
        messageId,
        responseId: null,
      };

      dispatch(addComment(commentInfo));
    }
  };

  const deleteCommentInfo = (messageId: number) => {
    dispatch(deleteComment(messageId));
  };

  const responseCommentInfo = (responseId: number) => {
    const { user } = userInfo;
    const messageId = 0;

    const commentInfo: CommentInfo = {
      ...user,
      date: '',
      messageId,
      responseId,
      content: '',
    };

    dispatch(addComment(commentInfo));
  };

  return (
    <ChatFromTemplate>
      <ChatForm
        comments={comments}
        addCommentInfo={addCommentInfo}
        deleteCommentInfo={deleteCommentInfo}
        responseCommentInfo={responseCommentInfo}
      />
    </ChatFromTemplate>
  );
};

export default CommentsLoader;
