import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteComment } from '../../modules/comments';

interface Props {
  id: number;
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
const Button = ({ id, buttonType }: Props) => {
  const dispatch = useDispatch();
  const deleteMessage = useCallback((id: number) => dispatch(deleteComment(id)), [dispatch]);

  const handlerFunction = (): void => {
    console.log(id, typeof id);
    if (buttonType === '삭제') {
      deleteMessage(id);
    }
  };

  return (
    <CustomButton type="button" onClick={handlerFunction}>
      {buttonType}
    </CustomButton>
  );
};

export default Button;
