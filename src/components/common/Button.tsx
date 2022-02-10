import React from 'react';
import styled from 'styled-components';

interface Props{
    buttonType : string;
}
const CustomButton = styled. button`
   font-size:10px;
    padding:8px;
    border-radius: 12px;
    border: 1.5px solid #BBBBBB;
    background: #F9F8F9;

    &:hover{
        background: #EDEDED;
        border-radius: 12px;
    }
` 
const Button = ({buttonType}:Props) => {
  return(<CustomButton type = 'button'>{buttonType}</CustomButton>)
};

export default Button;
