import React, { useEffect } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseinit'
import { doc, updateDoc, Timestamp, arrayUnion } from "firebase/firestore";
import { Single_user_fetch } from "../utils/Single_user_fetch";

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
  const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9');
  const [thisComment, setComment] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const childID = sessionStorage.getItem('child');
    if (childID) {
      Single_user_fetch(childID, ()=>{}).then((child) => setImage(child.imageURL));
    }
  }, []);

  
  const handleSendClick = () => {
    const childID = sessionStorage.getItem('child');
    if (!childID) {
      alert('Please login to comment');
      return;
    }

    const dataMap = {date: Timestamp.now(), profileID: childID, text: thisComment};
    const videoRef = doc(db, 'videos', id);
    updateDoc(videoRef, {comments: arrayUnion(dataMap)});
    setComment('');
  };


  return (
    <Container>
      <NewComment>
        <Avatar src={image} />
        <Input placeholder="Add a comment..." value={thisComment} onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={handleSendClick}>
          <SendIcon />
        </button>
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