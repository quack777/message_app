import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import comments from '../../modules/comments/reducer';
import { CommentsInfoState, CommentInfo } from '../../modules/comments';
import Button from '../common/Button';

interface Props {
  comment: CommentInfo;
}

const ChatBubble = ({ comment }: Props) => {
  const handlerFunction = () => {
    console.log('test');
  };
  return (
    <ChatBubbleBox>
      <ChatBubbleHeader>
        <img alt="img" src={comment.profileImage} style={{ borderRadius: '100%', width: '54px', height: '54px' }} />{' '}
        {comment.userName} {comment.date}
      </ChatBubbleHeader>
      <ChatBubbleContent>{comment.content}</ChatBubbleContent>
      <Button buttonType="답장" eventHandler={handlerFunction} />
      <Button buttonType="삭제" eventHandler={handlerFunction} />
    </ChatBubbleBox>
  );
};

const ChatBubbleBox = styled.div`
  width: 254px;
  height: 64px;
  margin-top: 29px;
  margin-left: 26px;
`;
const ChatBubbleHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ChatBubbleContent = styled.p`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;
export default ChatBubble;
