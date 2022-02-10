import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import comments from '../../modules/comments/reducer';
import { CommentsInfoState, CommentInfo } from '../../modules/comments';
import Button from '../common/Button';

interface Props {
  comment: CommentInfo;
  handlerFunction(event: React.MouseEventHandler<HTMLButtonElement>): void;
}

const ChatBubble = ({ comment, handlerFunction }: Props) => {
  return (
    <ChatBubbleBox>
      <ChatBubbleImage>
        <img alt="img" src={comment.profileImage} style={{ borderRadius: '100%', width: '54px', height: '54px' }} />{' '}
      </ChatBubbleImage>
      <ChatBubbleBody>
        <ChatBubbleHeader>
          <div style={{ fontSize: '16px' }}>
            {comment.userid === 4 ? '*' : ''}
            {comment.userName}
          </div>
          <div style={{ color: '#777777', fontSize: '9px' }}>{comment.date}</div>
        </ChatBubbleHeader>
        <ChatBubbleContent>{comment.content}</ChatBubbleContent>
        <ButtonHolder>
          <Button messageId={comment.messageId} buttonType="답장" />
          <Button messageId={comment.messageId} buttonType="삭제" />
        </ButtonHolder>
      </ChatBubbleBody>
    </ChatBubbleBox>
  );
};

const ChatBubbleBox = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 36px;
  margin-left: 26px;
  display: flex;
  flex-direction: row;
`;
const ChatBubbleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  * {
    margin: 2px;
  }
`;
const ChatBubbleBody = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const ChatBubbleImage = styled.div`
  borderradius: 100%;
  width: 54px;
  height: 54px;
`;
const ChatBubbleContent = styled.p`
  padding: 10px;
  width: 200px;
  position: absolute;
  left: 80px;

  background-color: white;
  border-radius: 10px;
`;
const ButtonHolder = styled.div`
  width: 100%;
  z-index: 100;
`;
export default ChatBubble;
