import React from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import {video_fetch} from "../utils/video_fetch";
import { useEffect, useState } from "react";
import {Single_video_fetch} from '../utils/Single_video_fetch';
import { useParams } from 'react-router-dom';




import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Comments from "../components/Comments";
import historyGenerator from "../utils/HistoryGenerator";




const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
color: Gray;  
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid light Gray;
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: Gray;
`;

const ChannelName = styled.span`
  font-weight: 500;
  color:Black;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;


const Video = () => {
  // window.location.reload(false);
  
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);

  const [creator, setCreator] = useState([]);

  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id');
  const { id } = useParams();

  useEffect(() => {
    Single_video_fetch(id,setVideo,setCreator)
  }, [id]);
  
  useEffect(() => {
    video_fetch(videos,setVideos)
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Video link copied to clipboard');
      })
      .catch((error) => console.log('Error copying text: ', error));
  };

  return (
  <Container>
    <Content>
      <VideoWrapper>
      

        <video
      width="100%"
      height="520"
      controls
      autoPlay
      poster={video.thumbnail}
      key={video.videoURL}
    >
      <source src={video.videoURL} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

      {/* <iframe
            width="100%"
            height="520"
            src={video.videoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
      
      </VideoWrapper>
      <Title>{video.title}</Title>
      <Details>
          <Info>{video.views} views • {historyGenerator(video.date)}</Info>

          <Buttons></Buttons>
          <Buttons>
          <Button> <ThumbUpAltOutlinedIcon/>Like</Button>
          <Button><ThumbDownOutlinedIcon/>Dislike</Button>
          <Button onClick={handleCopyLink}><ReplyOutlinedIcon/>Share</Button>

          </Buttons>

        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={creator.imageURL} alt={creator.name} />
            <ChannelDetail>
              <ChannelName>{creator.name}</ChannelName>
              <ChannelCounter></ChannelCounter>
              <Description>{video.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          {/* <Subscribe>SUBSCRIBE</Subscribe> */}
        </Channel>
        <Hr/>
        <Comments comments={video.comments}/>
    </Content>

    <Recommendation>
    

{videos.map(video => (
         <Card
         // const Card = ({id,title,thumbnail,creatorID,type})
         id={video.id} 
         title={video.title}
         thumbnail={video.thumbnail}
         creatorID={video.creatorID}
         type='sm'
         views={video.views}
         date={video.date}

         />
        ))}
    </Recommendation>
  </Container>
)
}

export default Video;