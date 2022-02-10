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
      <ChatBubbleHeader>
        <img alt="img" src={comment.profileImage} style={{ borderRadius: '100%', width: '54px', height: '54px' }} />{' '}
        <div style={{ fontSize: '16px' }}>
          {comment.userid === 4 ? '*' : ''}
          {comment.userName}
        </div>
        <div style={{ color: '#777777', fontSize: '9px' }}>{comment.date}</div>
      </ChatBubbleHeader>
      <ChatBubbleBody>
        <ChatBubbleContent>{comment.content}</ChatBubbleContent>
        <ButtonHolder>
          <Button id={comment.userid} buttonType="답장" />
          <Button id={comment.userid} buttonType="삭제" />
        </ButtonHolder>
      </ChatBubbleBody>
    </ChatBubbleBox>
  );
};

const ChatBubbleBox = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 29px;
  margin-left: 26px;
`;
const ChatBubbleHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  * {
    margin: 2px;
  }
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
`;
const ChatBubbleBody = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
`;
export default ChatBubble;
