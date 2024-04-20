import React from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import {video_fetch} from "../utils/video_fetch";
import { useEffect, useState } from "react";







const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
flex-wrap:wrap;
overflow: hidden;

`


const Home = () => {

const [videos, setVideo] = useState([]);
  useEffect(() => {
    video_fetch(videos,setVideo)
  }, []);

  return (
  <Container>
    
    {videos.map(video => (
          <Card
          // const Card = ({id,title,thumbnail,creatorID,type})
          id={video.id} 
          title={video.title}
          thumbnail={video.thumbnail}
          views={video.views}
          date={video.date}
          creatorID={video.creatorID}

          />
        ))}

    

  </Container>
)
}

export default Home;
