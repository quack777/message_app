import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteComment, responseComment } from '../../modules/comments/actions';

interface Props {
  messageId: number;
  buttonType: string;
}
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
const Button = ({ messageId, buttonType }: Props) => {
  const dispatch = useDispatch();
  const deleteMessage = useCallback((messageId: number) => dispatch(deleteComment(messageId)), [dispatch]);
  const responseMessage = useCallback((messageId: number) => dispatch(responseComment(messageId)), [dispatch]);

  const handlerFunction = (): void => {
    if (buttonType === '삭제') {
      deleteMessage(messageId);
    } else {
      // 답장 클릭 시에 messageId뽑아오기
      console.log(messageId);
      responseMessage(messageId);
    }
  };

  return (
    <CustomButton type="button" onClick={handlerFunction}>
      {buttonType}
    </CustomButton>
  );
};

export default Button;
