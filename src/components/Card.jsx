import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import historyGenerator from "../utils/HistoryGenerator";
import { useEffect, useState } from "react";
import {Single_user_fetch} from '../utils/Single_user_fetch';




const Container= styled.div`
  width:  ${(props) => props.type !== "sm" && "300px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  `;
  const Image = styled.img`
  width: 100%;
  height:   ${(props) => props.type === "sm" ? "120px" : "200px"};
  background-color: #cfcfcf;
  flex: 3;

  `;

  const Details = styled.div`
  display: flex;
  margin-top:  ${(props) => props.type !== "sm" && "16px"};
  gap:12px;
  flex: 2;

  `;

  const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: black;
  display: ${(props) => props.type === "sm" && "none"};
  `;

const Texts=styled.div``;
const Title=styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #030303;
  margin: 0;
  `;
const ChannelName=styled.h2`
font-size: 12px;
  font-weight: 400;
  color: #606060;
  margin: 0;`;

const Info=styled.div`
font-size: 14px;
color: #8ED197;`;

const Card = ({id,title,thumbnail,type,views,date,creatorID}) => {

  const [creator,setCreator] = useState([]);

  useEffect(() => {
    Single_user_fetch(creatorID,setCreator)
  }, [creatorID]);

  const link = `/video/${id}`;

  return (
    // matnsash t3mlha dynamic
    <Link to={link} style={{textDecoration:"none"}}>
    <Container type={type}>

      <Image style={{objectFit: "cover"}} type={type} src={thumbnail} />
      {/* <Image style={} type={type} src={thumbnail} /> */}
    <Details  type={type}>
      <ChannelImage  type={type} src={creator.imageURL}/>
      <Texts>
        <Title>{title}</Title>
        <ChannelName>{creator.name}</ChannelName>
        <Info> {views} • {historyGenerator(date)}</Info>

      </Texts>
    </Details>
    
    </Container>
    </Link>

  )
}   
export default Card;





