import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import comments from '../../modules/comments/reducer';
import { CommentsInfoState, CommentInfo } from '../../modules/comments';
import Button from '../common/Button';
import { RootState } from '../../modules';

interface Props {
  comment: CommentInfo;
  handlerFunction(event: React.MouseEventHandler<HTMLButtonElement>): void;
}

const ChatBubble = ({ comment, handlerFunction }: Props) => {
  const [response, setResponse] = useState<CommentInfo | undefined | null>(null);

  const findResponseContent = (responseId: number): void => {
    const comments = useSelector((state: RootState) => state.comments);
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
      {response && (
        <div>
          <p>{response.userName}</p>
          <p>{response.content}</p>
          <p>(회신)</p>
        </div>
      )}
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
      </ChatBubbleBody>
      <ButtonHolder>
        <Button messageId={comment.messageId} buttonType="답장" />
        <Button messageId={comment.messageId} buttonType="삭제" />
      </ButtonHolder>
    </ChatBubbleBox>
  );
};

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
