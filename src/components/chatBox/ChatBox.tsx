import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import { CommentInfo } from '../../modules/comments/types';

interface Props {
  comments: CommentInfo[];
}

const ChatBox = ({ comments }: Props) => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [comments]);

  return (
    <ChantBoxBorder>
      <PaddingBox />
      <ChatBoxContainer ref={myRef}>
        {comments.map((comment: CommentInfo) => (
          <ChatBubble key={comment.messageId} comments={comments} comment={comment} />
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

const PaddingBox = styled.div`
    height: 60px;
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
