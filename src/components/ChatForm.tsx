import React, { FC } from 'react';
import styled from 'styled-components';
import type { CommentInfo } from '../modules/comments';
import Button from './common/Button'

type ChatFormProps = {
  comments: CommentInfo[];
  addCommentInfo: (commentInfo: CommentInfo) => void;
  deleteCommentInfo: (userid: number) => void;
};

const ChatForm: FC<ChatFormProps> = ({ comments, addCommentInfo, deleteCommentInfo }) => {
  return (
    <Container>
      <div>채팅방 제목</div>
      <div>채팅 내용</div>
      <div>입력박스</div>
    </Container>
  );
};

const Container = styled.div``;

export default ChatForm;
