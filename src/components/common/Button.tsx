import React from 'react';
import styled from 'styled-components';

interface Props {
  buttonType: string;
  eventHandler(event: React.MouseEventHandler<HTMLButtonElement>): void;
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
const Button = ({ buttonType, eventHandler }: Props) => {
  return (
    <CustomButton type="button" onClick={() => eventHandler}>
      {buttonType}
    </CustomButton>
  );
};

export default Button;
