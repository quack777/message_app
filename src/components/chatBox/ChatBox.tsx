import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import ChatBubble from './ChatBubble';
import { CommentsInfoState, CommentInfo } from '../../modules/comments/types';

const ChatBox = () => {
  const data = useSelector((state: RootState) => state.comments);

  const handlerFunction = (event: React.MouseEventHandler<HTMLButtonElement>): void => {
    console.log('test', event);
  };
  return (
    <ChantBoxBorder>
      <div style={{ height: '60px' }} />
      <ChatBoxContainer>
        {data.map((comment: CommentInfo) => (
          <ChatBubble key={comment.messageId} comment={comment} handlerFunction={handlerFunction} />
        ))}
      </ChatBoxContainer>
    </ChantBoxBorder>
  );
};

const ChantBoxBorder = styled.div`
  overflow: auto;
  height: 580px;
  overflow-x: hidden;
`;
const ChatBoxContainer = styled.div`
  width: 100%;

  min-height: 520px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  top: 0px;
  padding-top: 5px;
  position: relative;
  background-color: #b2c7d9;
  padding-bottom: 10px;
`;
export default ChatBox;
