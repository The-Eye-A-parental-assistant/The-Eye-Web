import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Typography, Box, CssBaseline } from '@mui/material';
import "./CreatorChannel.css";
import ChildSide from "../components/ChildSide";
import styled from 'styled-components';

const Container2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
`;

const Main = styled.div`
  flex: 7;
`;
const CustomAvatar = styled(Avatar)`
  width: 30%; /* Assuming theme.spacing(30) equals 240px */
  height: 30%;
  border: 4px solid white;
  border-radius: 50%;
  margin-top: -56px; /* Assuming theme.spacing(-7) equals -56px */
  margin-left: 56px; /* Assuming theme.spacing(7) equals 56px */
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
  top: -360px; /* Assuming theme.spacing(-45) equals -360px */
  margin-bottom: 8px; /* Assuming theme.spacing(1) equals 8px */
  margin-left: 0px; /* Assuming theme.spacing() equals 0px */
  margin-right: 0px; /* Assuming theme.spacing(0) equals 0px */
`;

const Header = styled(Box)`
  background: linear-gradient(-45deg, #79AC78, #8ED197, #FEFDED, #9AD0C2, #265073);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  height: 240px; /* Assuming theme.spacing(30) equals 240px */
`;

const Content = styled(Box)`
  padding: 32px; /* Assuming theme.spacing(4) equals 32px */
  margin-left: -792px; /* Assuming theme.spacing(-99) equals -792px */
  margin-top: -144px; /* Assuming theme.spacing(-18) equals -144px */
  text-align: center;
`;

const VideoCard = ({ image, title, description }) => {
    return (
        <div className="video-card" >
            <img src={image} alt={title} className="video-image" />
            <div className="video-info">
                <h3 className="video-title">{title}</h3>
                <p className="video-description">{description}</p>
            </div>
        </div>
    );
};

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchedVideos = [
            {
                id: 1,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                title: 'Lionel Messi Scores 2 Goals in Argentina vs. Guatemala Friendly',
                description: 'Lionel Messi finished with 2 goals and 1 assist for Argentina in their friendly vs. Guatemala ahead of Copa América.',
            },
            {
                id: 2,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                title: 'Lionel Messi Masterclass Vs Guatemala 2024 - Friendly',
                description: 'Messi’s incredible performance in the friendly match against Guatemala. Argentina won 4-1.',
            },
            {
                id: 3,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                title: 'Lionel Messi Masterclass Vs Guatemala 2024 - Friendly',
                description: 'Messi’s incredible performance in the friendly match against Guatemala. Argentina won 4-1.',
            },
            {
                id: 4,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                title: 'Lionel Messi Masterclass Vs Guatemala 2024 - Friendly',
                description: 'Messi’s incredible performance in the friendly match against Guatemala. Argentina won 4-1.',
            },
            {
                id: 5,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                title: 'Lionel Messi Masterclass Vs Guatemala 2024 - Friendly',
                description: 'Messi’s incredible performance in the friendly match against Guatemala. Argentina won 4-1.',
            },
        ];
        setVideos(fetchedVideos);
    }, []);

    return (
   
            <Container2>

            <ChildSide/>

            <Main>


            <CssBaseline />
            <div className="App">
                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                    <ProfileCard>
                        <Header />
                        <CustomAvatar src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg' />
                        <Content>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold',fontFamily:'cursive' }}>Cameron Rain</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold',fontFamily:'cursive' }}>Alexandria, Egypt</Typography>
                            <Typography variant="body1" component="div" sx={{ fontFamily:'cursive' }} style={{ marginTop: 8 }}>Let the show begin</Typography>
                        </Content>
                    </ProfileCard>
                </Grid>
                <div justifyContent="center" alignItems="center" style={{ marginTop: '-22%' , marginLeft: '5%' }} >
                {videos.map((video) => (
                    <VideoCard
                    key={video.id}
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
