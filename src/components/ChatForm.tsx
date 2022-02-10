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
      <ChatInputContainer>
        <ChatInput placeholder="Write a message" />
        <ChatSummitButton>전송</ChatSummitButton>
      </ChatInputContainer>
    </Container>
  );
};

const Container = styled.div``;
const ChatInputContainer = styled.div`
  display: flex;
`;
const ChatInput = styled.textarea`
  flex: 4;
  padding: 15px 10px;
  padding-bottom: 0px;
  resize: none;
`;
const ChatSummitButton = styled.button`
  flex: 1;
`;

export default ChatForm;
