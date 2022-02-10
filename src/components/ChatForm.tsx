import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import type { CommentInfo } from '../modules/comments';
import Button from './common/Button'

type ChatFormProps = {
  comments: CommentInfo[];
  addCommentInfo: (content: string, keyCode: string) => void;
  deleteCommentInfo: (userid: number) => void;
};

const ChatForm: FC<ChatFormProps> = ({ comments, addCommentInfo, deleteCommentInfo }) => {
  const [commentContent, setCommentContent] = useState<string>('');

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentContent =  e.target.value;
    setCommentContent(currentContent);
  }

  useEffect(() => {
      setCommentContent('');
  }, [comments]);

  return (
    <Container>
      <div>채팅방 제목</div>
      <div>
        {
          comments.map((comment: CommentInfo) => {
            return (
              <TestComment key={comment.userid}>
                {
                  comment.userid
                }
                {
                  comment.userName
                }
                  <img alt="test" src={`${comment.profileImage}`} style={{width: '100px', height: '100px'}}/>
                {
                  comment.content
                }
                {
                  comment.date
                }
              </TestComment>
            )
          })
        }
      </div>
      <ChatInputContainer>
        <ChatInput value={commentContent} onKeyPress={(e) => addCommentInfo(commentContent, e.code)} placeholder="Write a message" onChange={changeContent}/>
        <ChatSummitButton  onClick={() => addCommentInfo(commentContent, '')}>전송</ChatSummitButton>
      </ChatInputContainer>
    </Container>
  );
};

const Container = styled.div``;

const TestComment = styled.div`
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
