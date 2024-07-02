import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Typography, Box, CssBaseline } from '@mui/material';
import "./CreatorChannel.css";
import CreatorSide from "../components/CreatorSide";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Single_user_fetch } from '../utils/Single_user_fetch';
import { db } from '../utils/firebaseinit';
import { getDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Container2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
background-image: url("https://www.transparenttextures.com/patterns/robots.png");
`;

const Main = styled.div`
  flex: 7;
`;
const CustomAvatar = styled(Avatar)`
    width: 200px !important; 
  height: 200px !important;
  border: 4px solid white;
  border-radius: 50%;
  margin-top: -110px; 
  margin-bottom:10px;
  margin-left: 56px; 

  @media (max-width: 1200px) {
    width: 160px !important;
    height: 160px !important;
  }

  @media (max-width: 900px) {
    width: 120px !important;
    height: 120px !important;
  }

  @media (max-width: 600px) {
    width: 100px !important;
    height: 100px !important;
  }
`;

const ProfileCard = styled(Box)`
  width: 100%;
  max-width: 1855px;
  margin: auto;
  text-align: center;
  background-color: white;
  border-radius: 0% 0% 10% 0%; /* Direct value */
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12); /* Default Material-UI shadow */
  overflow: hidden;
  position: relative;
  top: -80%; /* Adjusted to lift the content upwards */
  margin-bottom: 38%; /* Assuming theme.spacing(1) equals 8px */
  margin-left: 0px; /* Assuming theme.spacing() equals 0px */
  margin-right: 0px; /* Assuming theme.spacing(0) equals 0px */
`;

const Header = styled(Box)`
  background: linear-gradient(-45deg, #79AC78, #8ED197, #FEFDED, #9AD0C2, #265073);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  height: 200px; /* Assuming theme.spacing(30) equals 240px */
  
`;

const Content = styled(Box)`
//   padding: 32px; /* Assuming theme.spacing(4) equals 32px */
  margin-left: -40%; /* Assuming theme.spacing(-99) equals -792px */
  margin-top: -8%; /* Assuming theme.spacing(-18) equals -144px */
  text-align: center;

`;

const VideoCard = ({ videoid, image, title, description }) => {
    return (
        <Link to={`/video/${videoid}`} style={{ textDecoration: 'none' }}>
            <div className="video-card" >
                <img src={image} alt={title} className="video-image" />
                <div className="video-info">
                    <h3 className="video-title">{title}</h3>
                    <p className="video-description">{description}</p>
                </div>
            </div>
        </Link>
    );
};

const App = () => {
    const [videos, setVideos] = useState([]);
    const [creator, setCreator] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        sessionStorage.removeItem('child');
        const fetchedVideos = [];

        Single_user_fetch(id, setCreator).then(async (user) => {
            for (const video of user.videos) {
                await getDoc(doc(db,'videos',video)).then((doc) => {
                    const data = doc.data();
                    fetchedVideos.push({
                        id: video,
                        image: data.thumbnail,
                        title: data.title,
                        description: data.description,
                    });
                });
            }
            setVideos(fetchedVideos);
        });
    }, []);

    return (
   
<Container2>
    <CreatorSide/>

    <Main>
    <CssBaseline />
        <div className="App">
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <ProfileCard>
                <Header />
                <CustomAvatar src={ creator ? creator.imageURL : "" } />
                    <Content style={{padding: "30px 0"}}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold',fontFamily:'cursive' }}> {creator ? creator.name : ""} </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold',fontFamily:'cursive' }}> {creator ? creator.videos.length : 0 } videos </Typography>
                    </Content>
                </ProfileCard>
            </Grid>
            <div justifyContent="center" alignItems="center" style={{ marginTop: '-35%'  }} >
                {videos.map((video) => (
                    <VideoCard
                    key={video.id}
                    videoid={video.id}
                    image={video.image}
                    title={video.title}
                    description={video.description}
                    />
                ))}
            </div>
        </div>
    </Main>
</Container2>
    );
};

export default App;
