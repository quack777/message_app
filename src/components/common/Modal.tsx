import React from 'react';
import styled from 'styled-components';
import { MessageCut } from '../../utils/MessageCut';

interface Modal {
  isShowing: boolean;
  content: string;
  handleDelete(): void;
  handleCancel(): void;
}

const Modal = ({ isShowing, content, handleDelete, handleCancel }: Modal) => {
  return (
    <>
      <ModalOverlay isShowing={isShowing} />
      <ModalWrapper isShowing={isShowing}>
        <ModalInner>
          <MessageBox>
            <p>{MessageCut(content)}</p>
            <p>메시지를 정말 삭제하시겠습니까?</p>
          </MessageBox>
          <ButtonBox>
            <Button named="delete" type="submit" onClick={() => handleDelete()}>
              삭제
            </Button>
            <Button type="submit" onClick={() => handleCancel()}>
              취소
            </Button>
          </ButtonBox>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div<{ isShowing: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.isShowing ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<{ isShowing: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.isShowing ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding-top: 55px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
`;

const MessageBox = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p:nth-child(1) {
    color: #084861;
    font-weight: bold;
    font-size: 30px;
    margin-top: -10px;
    margin-bottom: 15px;
  }
  & > p:nth-child(2) {
    color: #98999c;
    font-size: 18px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ named?: string }>`
  padding: 13px 25px;
  margin: 0 8px;
  border-radius: 12px;
  border-width: 0.5px;
  color: ${(props) => (props.named === 'delete' ? '#F9F8F9' : '#98999C')};
  background: ${(props) => (props.named === 'delete' ? '#7eb496' : '#F9F8F9')};
  border-style: ${(props) => (props.named === 'delete' ? 'none' : 'solid')};
  &:hover {
    background: ${(props) => (props.named === 'delete' ? '#9FD3B6' : '#EDEDED')};
  }
`;

export default Modal;
