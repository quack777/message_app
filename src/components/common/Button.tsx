import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { responseComment } from '../../modules/comments/actions';

interface Props {
  messageId: number;
  content: string;
  buttonType: string;
  showingModal(messageId: number, content: string): void;
}

const Button = ({ messageId, content, buttonType, showingModal }: Props) => {
  const dispatch = useDispatch();
  const responseMessage = useCallback((messageId: number) => dispatch(responseComment(messageId)), [dispatch]);

  const handlerFunction = (): void => {
    if (buttonType === '삭제') {
      if (typeof messageId === 'number') {
        showingModal(messageId, content);
      }
    } else {
      responseMessage(messageId);
    }
  };

  return (
    <CustomButton type="button" onClick={handlerFunction}>
      {buttonType}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  font-size: 10px;
  padding: 8px;
  border-radius: 12px;
  border: 1.5px solid #bbbbbb;
  background: #f9f8f9;

  &:hover {
    background: #ededed;
    border-radius: 12px;
  }
`;

export default Button;
