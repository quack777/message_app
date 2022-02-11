import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommentInfo } from '../../modules/comments/types';
import Button from '../common/Button';
import { RootState } from '../../modules';

interface Props {
  comment: CommentInfo;
  comments: CommentInfo[];
}

const ChatBubble = ({ comment, comments }: Props) => {
  const [response, setResponse] = useState<CommentInfo | undefined | null>(null);

  const findResponseContent = (responseId: number): void => {
    const findResponse = comments.find((comment) => responseId === comment.messageId);
    setResponse(findResponse);
  };

  useEffect(() => {
    if (comment.responseId) {
      findResponseContent(comment.responseId);
    }
  }, []);

  return (
    <ChatBubbleBox>
      <ChatBubbleImage>
        <img alt="img" src={comment.profileImage} />{' '}
      </ChatBubbleImage>
      <ChatBubbleBody>
        <ChatBubbleHeader>
          <div>
            {comment.userid === 4 ? '*' : ''}
            {comment.userName}
          </div>
          <div>{comment.date}</div>
        </ChatBubbleHeader>
        <ChatBubbleContent>
          {' '}
          {response && (
            <ResponsiveContent>
              <p>{response.userName}</p>
              <p>{response.content}</p>
              <p>(회신)</p>
            </ResponsiveContent>
          )}
          {comment.content}
        </ChatBubbleContent>
      </ChatBubbleBody>
      <ButtonHolder>
        <Button messageId={comment.messageId} buttonType="답장" />
        <Button messageId={comment.messageId} buttonType="삭제" />
      </ButtonHolder>
    </ChatBubbleBox>
  );
};

const ResponsiveContent = styled.div`
  color: #756b52;
  font-size: 13px;
  border-bottom: 1px solid #756b52;
  margin-bottom: 3px;
  padding-bottom: 3px;
`;
const ChatBubbleBox = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-left: 26px;
  display: flex;
  flex-direction: row;
`;
const ChatBubbleHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  * {
    margin: 2px;
  }
  & > div:nth-child(1) {
    font-size: 16px;
  }
  & > div:nth-child(2) {
    color: #777777;
    font-size: 9px;
  }
`;
const ChatBubbleBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const ChatBubbleImage = styled.div`
  borderradius: 100%;
  width: 54px;
  height: 54px;
  margin-top: 4px;
  margin-right: 2px;
  img {
    border-radius: 100%;
    width: 54px;
    height: 54px;
  }
`;
const ChatBubbleContent = styled.div`
  padding: 10px;
  hieght: 100%;
  word-break: break-all;
  background-color: white;
  border-radius: 10px;
  width: 150px;
  margin-left: 5px;
`;
const ButtonHolder = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: end;
  Button {
    margin-left: 3px;
  }
`;
export default ChatBubble;
