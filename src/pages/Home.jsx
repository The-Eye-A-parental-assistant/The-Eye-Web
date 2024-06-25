import React from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import ChildSide from "../components/ChildSide";
import {video_fetch} from "../utils/video_fetch";
import { useEffect, useState } from "react";
import {Single_user_fetch} from "../utils/Single_user_fetch";


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 80px;
`;

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
//  padding: 22px 96px;
 padding: 10px 20px;

`;
const Home = () => {
  const [videos, setVideo] = useState([]);
  
  useEffect(() => {
    const childID = sessionStorage.getItem('child');
    if (childID) {
      Single_user_fetch(childID, ()=>{}).then((child) => video_fetch(setVideo, child.prefs));
    }else{
      alert('Please login to view this page');
    }
  }, []);

  return (
    <Container>
      {/* <Menu/> */}
      <ChildSide/>

      <Main >
        {/* <Wrapper> */}
        
      {/* <Navbar/> */}

      <CardContainer>
      {videos.map(video => (
        <Card
        // const Card = ({id,title,thumbnail,creatorID,type})
        key={video.id}
        id={video.id} 
        title={video.title}
        thumbnail={video.thumbnail}
        views={video.views}
        date={video.date}
        creatorID={video.creatorID}
        
        />
      ))}



      </CardContainer>
      {/* </Wrapper> */}
      </Main>
    </Container>
  );
}

export default Home;
