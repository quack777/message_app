import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment } from '../modules/comments';
import ChatFromTemplate from '../components/ChatFromTemplate';
import ChatForm from '../components/ChatForm';
import type { RootState } from '../modules/index';
import type { CommentInfo } from '../modules/comments';

const CommentsLoader: FC = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();

  const addCommentInfo = (currentCommentInfo: CommentInfo) => {
    dispatch(addComment(currentCommentInfo));
  };
  const deleteCommentInfo = (userid: number) => {
    dispatch(deleteComment(userid));
  };
  return (
    <ChatFromTemplate>
      <ChatForm comments={comments} addCommentInfo={addCommentInfo} deleteCommentInfo={deleteCommentInfo} />
    </ChatFromTemplate>
  );
};

export default CommentsLoader;
