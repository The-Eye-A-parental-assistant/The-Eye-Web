import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, CssBaseline } from '@mui/material';
import "./CreatorChannel.css";
import ChildSide from "../components/ChildSide";
import styled from 'styled-components';
import { Single_user_fetch } from '../utils/Single_user_fetch';
import { db } from '../utils/firebaseinit';
import { getDoc, doc } from 'firebase/firestore';
import historyGenerator from '../utils/HistoryGenerator';
import { Link } from 'react-router-dom';

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

const VideoCard = ({ videoid, image, title, description, date }) => {
    return (
        <Link to={`/video/${videoid}`} style={{ textDecoration: 'none' }}>
            <div className="video-card" >
                <img src={image} alt={title} className="video-image" />
                <div className="video-info">
                    <h3 className="video-title">{title}</h3>
                    <p className="video-description">{description}</p>
                    <br />
                    <h5>{historyGenerator(date)}</h5>
                </div>
            </div>
        </Link>
    );
};

const App = () => {
    const [videos, setVideos] = useState([]);
    const [id, setId] = useState(sessionStorage.getItem('child'));

    useEffect(() => {
        const fetchedVideos = [];

        Single_user_fetch(id, ()=>{}).then(async (user) => {
            for (const historyVideo of user.history) {
                await getDoc(doc(db,'videos',historyVideo.video)).then((doc) => {
                    const video = doc.data();
                    fetchedVideos.push({
                        id: historyVideo.video,
                        image: video.thumbnail,
                        title: video.title,
                        description: video.description,
                        date: historyVideo.date.toDate(),
                    });
                });
            }
            setVideos(fetchedVideos);
        });
    }, []);

    return (
   
            <Container2>
            <ChildSide/>
            <Main>


            <CssBaseline />
            <div className="App">
                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                    <Content>
                        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold',fontFamily:'cursive',textAlign:'center' }}>History</Typography>
                    </Content>
                </Grid>

                <div justifyContent="center" alignItems="center" style={{ marginTop: '-42%'  }} >
                {videos.map((video) => (
                    <VideoCard
                    key={video.id}
                    videoid={video.id}
                    image={video.image}
                    title={video.title}
                    description={video.description}
                    date={video.date}
                    />
                ))}
                </div>
            </div>
            </Main>
            </Container2>
    );
};

export default App;
