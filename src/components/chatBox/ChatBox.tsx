import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {RootState} from '../../modules'
import ChatBubble from './ChatBubble';
import { CommentsInfoState,CommentInfo } from '../../modules/comments';

const ChatBoxContainer = styled. div`
    width:100%;
    height:580px;
    padding-top:50px;
    position:relative;
    background-color:#B2C7D9;
`
const ChatBox = () => {
    const data = useSelector((state:RootState)=>state.comments) 
    console.log(data)
  return(    
      <>
   <div style={{height:"97px"}}/>
  <ChatBoxContainer>
      {data.map((comment: CommentInfo)=>(
          <ChatBubble key = {comment.userid} comment = {comment}/>
      ))}
  </ChatBoxContainer>
  </>
  )
};

export default ChatBox;
