import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Cookies from 'js-cookie';
import Child from "../models/Child";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Profilepic from '../img/Profilepic.jpg';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseinit'
import { doc, updateDoc, Timestamp, arrayUnion } from "firebase/firestore";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({comments}) => {
  const [child, setChild] = useState(Child.fromJSON(Cookies.get('child')));
  const [thisComment, setComment] = useState('');

  
  // const handleSendClick = () => {
  //   const { id } = useParams();
  //   const dataMap = {date: Timestamp.fromDate(new Date()), profileID: child.id, text: thisComment};
  //   const videoRef = doc(db, 'videos', id);
  //   updateDoc(videoRef, {comments: arrayUnion(dataMap)});
  // };


  return (
    <Container>
      <NewComment>
        <Avatar src={child.imageURL} />
        <Input placeholder="Add a comment..." onChange={(e)=>setComment(e.target.value)}/>
        <SendIcon />
      </NewComment>
      {comments && comments.map((comment) => (
        <Comment
         profileID={comment.profileID}
          date={comment.date}
          text={comment.text}
        />
      ))}
    </Container>
  );
};

export default Comments;