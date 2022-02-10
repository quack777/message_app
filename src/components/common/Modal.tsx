import React, { useState } from 'react';
import styled from 'styled-components';

interface Modal {
  message: string;
  visible: boolean;
  messageId: number;
}

const Modal = ({ message = '1234567891011', visible = false }) => {
  const [messageContent, setMessageContent] = useState(message); // message 값 10자로 잘라서 저장해야함

  const handleClickDelete = () => {
    // 모달 끄기
    // 메시지 삭제 reduce
  };

  const handleModaloff = () => {
    // 모달 끄기
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner>
          <div>
            <p>{message}</p>
            <p>메시지를 삭제하시겠습니까?</p>
          </div>
          <div>
            <button type="submit" onClick={handleClickDelete}>
              삭제
            </button>
            <button type="submit" onClick={handleModaloff}>
              취소
            </button>
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
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
  padding: 40px 20px;
`;

export default Modal;
