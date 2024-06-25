import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Typography, Box, CssBaseline } from '@mui/material';
import "./CreatorChannel.css";
import ChildSide from "../components/ChildSide";
import styled from 'styled-components';

const Container2 = styled.div`
  display: flex;
  padding-top: 60px;
  padding-left: 20px;
`;

const Main = styled.div`
  flex: 7;
`;

const Content = styled(Box)`
  padding: 32px; /* Assuming theme.spacing(4) equals 32px */
  margin-left: -80%; 
  margin-top: -42.5%; /* Assuming theme.spacing(-18) equals -144px */
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
                    <Content>
                            <Typography variant="h3" component="div" sx={{ fontWeight: 'bold',fontFamily:'cursive',textAlign:'center',paddingLeft:'30px' }}>Disliked Videos</Typography>
                            
                        </Content>
                    
                </Grid>
                <div justifyContent="center" alignItems="center" style={{ marginTop: '-42%'  }} >
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
