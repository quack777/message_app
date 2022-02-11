import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../modules';
import type { CommentInfo } from '../modules/comments/types';
import ChatBox from './chatBox/ChatBox';
import ChatTitle from './chatBox/ChatTitle';

type ChatFormProps = {
  comments: CommentInfo[];
  addCommentInfo: (content: string, keyCode: string) => void;
};

const ChatForm: FC<ChatFormProps> = ({ comments, addCommentInfo }) => {
  const [commentContent, setCommentContent] = useState<string>('');
  const [responseBtnOn, setResponseBtnOn] = useState<boolean>(false);
  const [response, setResponse] = useState<CommentInfo | undefined | null>(null);

  const responseInfo = useSelector((state: RootState) => state.response);

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentContent = e.target.value;
    setCommentContent(currentContent);
  };

  const findResponseContent = (responseId: number | null): void => {
    if (responseId) {
      const findResponse = comments.find((comment) => responseId === comment.messageId);
      setResponse(findResponse);
    }
  };

  useEffect(() => {
    setCommentContent('');
  }, [comments]);

  useEffect(() => {
    setResponseBtnOn(responseInfo.responseActive);
    if (responseInfo.responseActive) {
      findResponseContent(responseInfo.responseId);
    }
  }, [responseInfo]);

  return (
    <Container>
      <ChatTitle />
      <ChatBox comments={comments} />
      {responseInfo.responseActive && response && (
        <div>
          <p>{response.userName}</p>
          <p>{response.content}</p>
        </div>
      )}
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

const ChatInputContainer = styled.div`
  display: flex;
  border: 1px solid #f5f5f5;
  border-top: none;
  padding: 5px 8px;
  padding-bottom: px;
`;

const ChatInput = styled.textarea`
  flex: 5;
  padding: 5px 10px;
  padding-bottom: 0px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 20%);
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 2px rgb(0 0 0 / 20%);
  resize: none;
  :focus {
    outline: 1px solid rgb(0 0 0 / 0.1);
  }
`;

const ChatSummitButton = styled.button`
  flex: 1;
  margin: 5px;
  background-color: #fee500;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
`;

export default ChatForm;
