import React from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import {video_fetch} from "../utils/video_fetch";
import { useEffect, useState } from "react";
import {Single_video_fetch} from '../utils/Single_video_fetch';
import { useParams } from 'react-router-dom';
import Child from "../models/Child";
import updateChild from '../utils/updateChild'
import { Timestamp, arrayUnion, arrayRemove } from "firebase/firestore";
import { Single_user_fetch } from "../utils/Single_user_fetch";
import incrementViews from "../utils/incrementViews";
import Cookie from 'js-cookie'
import CreatorSide from "../components/CreatorSide";
import ParentNav from '../components/ParentNav';


//msh ma3mol
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
//ma3mol
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

//msh ma3mol
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
//ma3mol
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

//msh ma3mol
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
//ma3mol
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Comments from "../components/Comments";
import historyGenerator from "../utils/HistoryGenerator";
import ChildSide from "../components/ChildSide";
import { set } from "firebase/database";

const Container2 = styled.div`
  display: flex;
  padding-top: 80px;
`;

const Main = styled.div`
  flex: 7;


`;
const Wrapper = styled.div`
//  padding: 22px 96px;
 padding: 13px 12px;

`;

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 5px;
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
  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);
  const [creator, setCreator] = useState([]);

  const [thumbUpClicked, setThumbUpClicked] = useState(false);
  const [thumbDownClicked, setThumbDownClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);
  const [disbled, setDisabled] = useState(true);
  const [childID, setChildID] = useState(null);

  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id');

  useEffect(() => {
    incrementViews(id);
    Single_video_fetch(id,setVideo,setCreator)
    .then((video) => {
      video_fetch(setVideos, video.tags, video.videoURL);
    });

    const childsessionID = sessionStorage.getItem('child');
    
    if (childsessionID === null || childsessionID === undefined || childsessionID === '') {
      setDisabled(true);
      return;
    }
    
    Single_user_fetch(childsessionID, ()=>{}).then((data) => {
      if (data instanceof Child) {
        setDisabled(false);
        setThumbDownClicked(data.dislikes.includes(id));
        setThumbUpClicked(data.likes.includes(id));
        setBookmarkClicked(data.favourites.includes(id));
        const now = Timestamp.now();
        updateChild(childsessionID, {history: arrayUnion({video: id, date: now})});
      }
    });
    setChildID(childsessionID);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Video link copied to clipboard');
      })
      .catch((error) => console.log('Error copying text: ', error));
  };

  const handleThumbUpClick = () => {
    if (thumbUpClicked === false) // will become true
      updateChild(childID, {likes: arrayUnion(id), dislikes: arrayRemove(id)});
    else
      updateChild(childID, {likes: arrayRemove(id)});
    
    setThumbUpClicked(!thumbUpClicked);
    setThumbDownClicked(false);
  };

  const handleThumbDownClick = () => {
    if (thumbDownClicked === false) // will become true
      updateChild(childID, {dislikes: arrayUnion(id), likes: arrayRemove(id)});
    else
      updateChild(childID, {dislikes: arrayRemove(id)});
    
    setThumbDownClicked(!thumbDownClicked);
    setThumbUpClicked(false);
};

  const handleBookmarkClick = () => {
    if (bookmarkClicked === false) // will become true
      updateChild(childID, {favourites: arrayUnion(id)});
    else
      updateChild(childID, {favourites: arrayRemove(id)});
    
    setBookmarkClicked(!bookmarkClicked);
  };
  return (
    <Container2>
      {/* <Menu /> */}

      {
        Cookie.get('role') == 'creator'? <CreatorSide/> : 
          sessionStorage.getItem('child') ? <ChildSide/> :
            <ParentNav/>
      }
      <Main>
      {/* <Navbar/> */}
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
      </VideoWrapper>

      <Title>{video.title}</Title>
      <Details>
          <Info>{video.views} views • {historyGenerator(video.date)}</Info>

          <Buttons></Buttons>
          <Buttons>

      <Button onClick={disbled ? undefined : handleThumbUpClick} >
        {thumbUpClicked ? <ThumbUpIcon style={{color: '#8ED197'}}/> : <ThumbUpAltOutlinedIcon />}Like
      </Button>
      <Button onClick={disbled ? undefined : handleThumbDownClick}>
        {thumbDownClicked ? <ThumbDownIcon style={{color: '#8ED197'}} /> : <ThumbDownOutlinedIcon />}Dislike
      </Button>
      <Button onClick={handleCopyLink}><ReplyOutlinedIcon/>Share</Button>
      <Button onClick={disbled ? undefined : handleBookmarkClick}>
        {bookmarkClicked ? <BookmarkAddedIcon style={{color: '#8ED197'}}/> : <BookmarkAddOutlinedIcon />}Save
      </Button>

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
         key={video.id}
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


  </Main>
  </Container2>
)
}

export default Video;