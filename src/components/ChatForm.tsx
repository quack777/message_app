import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import type { CommentInfo } from '../modules/comments';
import ChatBox from './chatBox/ChatBox';
import ChatTitle from './chatBox/ChatTitle';
import Button from './common/Button';

type ChatFormProps = {
  comments: CommentInfo[];
  addCommentInfo: (content: string, keyCode: string) => void;
  deleteCommentInfo: (messageId: number) => void;
  responseCommentInfo: (responseId: number) => void;
};

const test = (comments: CommentInfo[]): boolean => {
  let isSubmitSuccess = true;
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].content === '') {
      isSubmitSuccess = false;
      break;
    }
  }
  return isSubmitSuccess;
};

const ChatForm: FC<ChatFormProps> = ({ comments, addCommentInfo, deleteCommentInfo, responseCommentInfo }) => {
  const [commentContent, setCommentContent] = useState<string>('');
  const [isAwaitResponse, setIsAwaitResponse] = useState<boolean>(false);

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentContent = e.target.value;
    setCommentContent(currentContent);
  };

  const handleResponseCommentInfo = (responseId: number): void => {
    if (isAwaitResponse) return;
    responseCommentInfo(responseId);
    setIsAwaitResponse(true);
  };

  useEffect(() => {
    setCommentContent('');
    setIsAwaitResponse(test(comments));
  }, [comments]);

  console.log(comments);
  return (
    <Container>
      <ChatTitle />
      <ChatBox />
      <ChatInputContainer>
        <ChatInput
          value={commentContent}
          onKeyPress={(e) => addCommentInfo(commentContent, e.code)}
          placeholder="Write a message"
          onChange={changeContent}
        />
        <ChatSummitButton onClick={() => addCommentInfo(commentContent, '')}>전송</ChatSummitButton>
      </ChatInputContainer>
    </Container>
  );
};

const Container = styled.div``;

const TestChatForm = styled.div`
  margin: 20px 10px;
  font-size: 20px;
  font-weight: bold;
`;

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
  cursor: pointer;
`;

export default ChatForm;
