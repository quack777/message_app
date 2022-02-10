import React from 'react';
import styled from 'styled-components';

const ChatBoxContainer = styled. div`
    width:100%;
    height:90vh;
    position:relative;
    background-color:#B2C7D9;
`
const ChatBox = () => {
  return(<ChatBoxContainer>
      채팅방
  </ChatBoxContainer>)
};

export default ChatBox;
