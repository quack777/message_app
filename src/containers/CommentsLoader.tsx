import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment } from '../modules/comments';
import ChatFromTemplate from '../components/ChatFromTemplate';
import ChatForm from '../components/ChatForm';
// import { createDate } from '../utils/createDate';
import userInfo from '../data/tmpUser.json';
import type { RootState } from '../modules/index';
import type { CommentInfo } from '../modules/comments';


const CommentsLoader: FC = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();

  const addCommentInfo = (content: string) => {
    if(content === '') return;    

    // const currentDate = createDate();
    const date = '2021-02-10 23:26:34';
    const { user } = userInfo;

    const commentInfo: CommentInfo = {
      ...user,
      date,
      content,
    }

    dispatch(addComment(commentInfo));
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
