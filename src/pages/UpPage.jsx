import React, { useState } from 'react';
import styled from 'styled-components';
import Creatorside from "../components/CreatorSide";
import Cookies from 'js-cookie';
import { db } from '../utils/firebaseinit';
import { addDoc, collection, Timestamp, updateDoc, arrayUnion, doc } from "firebase/firestore";
import uploadImage from '../utils/uploadImage';
import uploadVideo from '../utils/uploadVideo';



const Container2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
    background-image: url("https://www.transparenttextures.com/patterns/robots.png");

`;

const Main = styled.div`
  flex: 7;
`;

const UploadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 background-color: rgba(255, 255, 255); 

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 1400px; 
  min-height :600px;
  margin: 70px auto 0 auto ;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 25px;
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

const UploadButton = styled.button`
  background-color: #8ED197;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 25px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #7ac486;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 25px;
`;

const Progress = styled.div`
  height: 20px;
  background-color: #8ED197;
  width: ${(props) => props.progress}%;
  transition: width 0.4s ease;
`;

const UploadPage = () => {
    const [videoTitle, setVideoTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log('Uploading video...');
        const UID = Cookies.get('token');
        const videoThumbnailPlaceholder = "https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fvideo-placeholder.png?alt=media&token=92eea41a-d80c-47b6-81b4-0d3ca801b7d2";

        const docData = {
          title: videoTitle,
          thumbnail: videoThumbnailPlaceholder,
          videoURL: "",
          description: description,
          views: 0,
          creatorID: UID,
          status: "pending",
          comments: [],
          date: Timestamp.now(),
          tags: [],
        };


        const docRef = await addDoc(collection(db, "videos"), docData);

        const promise1 = updateDoc(doc(db, "users", UID), {videos: arrayUnion(docRef.id)});
        const promise2 = uploadImage(thumbnail, `/videos/${UID}/${docRef.id}`);
        const promise3 = uploadVideo(videoFile, `/videos/${UID}/${docRef.id}.${videoFile.name.split('.').pop()}`, setUploadProgress);

        Promise.all([promise1, promise2, promise3]).then(async () => {
          const cdnRoot = 'https://d2qmp7544om0tu.cloudfront.net';
          const videoURL = `${cdnRoot}/public/videos/${UID}/${docRef.id}.${videoFile.name.split('.').pop()}`
          await updateDoc(docRef, {thumbnail: await promise2, videoURL: videoURL});
          alert('Video uploaded successfully');
        });
    };

    return (
        <Container2 >

            <Creatorside />

            <Main >

                <UploadPageContainer  >
                    <Title>Upload</Title>
                    <Form onSubmit={handleUpload}>
                        <Label>Title:</Label>
                        <InputField
                            type="text"
                            color='success'
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                        />
                        <Label>Description:</Label>
                        <TextArea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Label>Video File:</Label>
                        <InputField type="file" accept="video/*" onChange={handleFileChange} />
                        <Label>Thumbnail:</Label>
                        <InputField type="file" accept="image/*" onChange={handleThumbnailChange} />
                        <UploadButton type="submit">Upload</UploadButton>
                        {uploadProgress > 0 && (
                            <ProgressBar>
                                <Progress progress={uploadProgress}></Progress>
                            </ProgressBar>
                        )}
                    </Form>
                </UploadPageContainer>
            </Main>
        </Container2>
    );
};

export default UploadPage;
