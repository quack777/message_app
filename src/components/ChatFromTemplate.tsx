import React, { FC } from 'react';
import styled from 'styled-components';

const ChatFromTemplate: FC = ({ children }) => {
  return <ChatFromLayout>{children}</ChatFromLayout>;
};

const ChatFromLayout = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: red;
`;

export default ChatFromTemplate;
