import React, { FC } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { addComment, responseComment } from '../modules/comments/actions';
import ChatFromTemplate from '../components/ChatFromTemplate';
import ChatForm from '../components/ChatForm';
import userInfo from '../data/tmpUser.json';
import type { RootState } from '../modules/index';
import type { CommentInfo } from '../modules/comments/types';
import SendDate from '../utils/SendDate';

const CommentsLoader: FC = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const responseInfo = useSelector((state: RootState) => state.response);
  const dispatch = useDispatch();

  const addCommentInfo = (content: string, keyCode: string, responseId = responseInfo.responseId): void => {
    if (content.replace(/\n/g, "") === '') return;
    
    if (keyCode === 'Enter' || keyCode === '') {
      const { user } = userInfo;
      const messageId = 0;
      const date = SendDate();

      if (responseInfo.responseActive) {
        const commentInfo: CommentInfo = {
          ...user,
          date,
          content,
          messageId,
          responseId,
        };

        batch(() => {
          dispatch(addComment(commentInfo)); 
          dispatch(responseComment(null)); 
        })
      } else {
        const commentInfo: CommentInfo = {
          ...user,
          date,
          content,
          messageId,
          responseId: null,
        };

        dispatch(addComment(commentInfo));
      }
    }
  };

  return (
    <ChatFromTemplate>
      <ChatForm
        comments={comments}
        addCommentInfo={addCommentInfo}
      />
    </ChatFromTemplate>
  );
};

export default CommentsLoader;
