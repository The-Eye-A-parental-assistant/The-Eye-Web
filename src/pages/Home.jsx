import React from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import Menu from "../components/Menu";
import ChildSide from "../components/ChildSide";
import Navbar from "../components/Navbar";
import {video_fetch} from "../utils/video_fetch";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Child from "../models/Child";


// const Container = styled.div`
// width: 100%;
// display: flex;
// justify-content: space-evenly;
// flex-wrap:wrap;
// overflow: hidden;

// `

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
  const [child, setChild] = useState(Child.fromJSON(Cookies.get('child')));
  const [videos, setVideo] = useState([]);
  
  useEffect(() => {
    if (child) {
      video_fetch(setVideo, child.prefs)
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
