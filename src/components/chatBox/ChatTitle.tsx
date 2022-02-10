import React, { useState } from 'react';
import styled from 'styled-components';

const ChatTitle = () => {
  return (
    <ChatTitleBox>
      <ChatTitleBoxContent>15팀 단톡방</ChatTitleBoxContent>
    </ChatTitleBox>
  );
};

const ChatTitleBox = styled.div`
  border: 1px solid black;
  width: 390px;
  height: 97px;
  display: flex;
  z-index: 10;
  position: fixed;
  align-items: center;
  background-color: white;
`;
const ChatTitleBoxContent = styled.div`

width: 150px;
height: 28px;
left: 42px;
top: 34px
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
`;
export default ChatTitle;
