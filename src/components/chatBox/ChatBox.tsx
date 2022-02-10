import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import ChatBubble from './ChatBubble';
import { CommentsInfoState, CommentInfo } from '../../modules/comments';

const ChatBox = () => {
  const data = useSelector((state: RootState) => state.comments);
  console.log(data);
  const handlerFunction = (event: React.MouseEventHandler<HTMLButtonElement>): void => {
    console.log('test', event);
  };
  return (
    <div style={{ overflow: 'scroll', height: '580px' }}>
      <div style={{ height: '97px' }} />
      <ChatBoxContainer>
        {data.map((comment: CommentInfo) => (
          <ChatBubble key={comment.userid} comment={comment} handlerFunction={handlerFunction} />
        ))}
      </ChatBoxContainer>
    </div>
  );
};

const ChatBoxContainer = styled.div`
  width: 100%;
  max-height: 100%;
  z-index: -1;

  padding-top: 50px;
  position: relative;
  background-color: #b2c7d9;
`;
export default ChatBox;
