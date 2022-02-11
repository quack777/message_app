import React from 'react';
import styled from 'styled-components';

const ChatTitle = () => {
  return (
    <ChatTitleBox>
      <ChatTitleBoxContent>15팀 단톡방🎈</ChatTitleBoxContent>
    </ChatTitleBox>
  );
};
const ChatTitleBox = styled.div`
  width: 390px;
  height: 60px;
  display: flex;
  border-bottom: none;
  z-index: 10;
  position: fixed;
  align-items: center;
  background-color: #b2c7d9;
`;
const ChatTitleBoxContent = styled.div`
  width: 180px;
  height: 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  margin-left: 10px;
  line-height: 28px;
`;
export default ChatTitle;
