import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {Single_user_fetch} from '../utils/Single_user_fetch';
import HistoryGenerator from '../utils/HistoryGenerator';


const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({date,text,profileID}) => {
  const [profile,setProfile] = useState([]);

  useEffect(() => {
    Single_user_fetch(profileID,setProfile)
  }, [profileID]);
  return (
    <Container>
      <Avatar src={profile.imageURL}  />
      <Details>
        <Name>
          {profile.name} <Date>{HistoryGenerator(date)}</Date>
        </Name>
        <Text>
          {text}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;