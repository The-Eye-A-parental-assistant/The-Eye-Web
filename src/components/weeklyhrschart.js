import React, { useState } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,Area
} from 'recharts';
import HistoryIcon from '@mui/icons-material/History';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import adaptorScreenTime from '../utils/adaptorScreenTime';
import adaptorFlags from '../utils/adaptorFlags';
import updateChild from '../utils/updateChild';
import adaptorDatabaseFlags from '../utils/adaptorDatabaseFlags';

import styled from 'styled-components';
const Wrapper = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/robots.png");`;
const Graphcontainer = styled.div`
  background-color: #ffffff;
  border: 5px solid #8ED197;
  border-radius: 10px;
  margin: 20px;`;
  const ProfileImage = styled.img`
    border-radius: 30%;
    width: 80px;
    height: 80px;
    padding: 10px;
  `;
  const WatchHistoryButton = styled.button`
  padding: 10px 20px;
    cursor: pointer;
    border-radius: 7px;
    background-color: #8ED197;
  `;

  const ChangePinButton = styled.button`
  padding: 10px 20px;
    cursor: pointer;
    border-radius: 7px;
    background-color: #8ED197;
  `;
  
  // 8ED197
  const SelectButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 7px;
  border-color: #4caf50;
`;

  const DeleteAccountButton = styled.button`
  padding: 10px 20px;
    cursor: pointer;
    border-radius: 7px;
    border-color: #F5271C;
    background-color: #FFABA8;
    color: #F5271C;
   
    `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 5px;
    padding-left: 150px;
  `;


  
  const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const ProfileName = styled.span`
    margin-left: 10px;
    font-size: 28px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  `;

  const ContentButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-left: 50px;
    `;
    
    const ContentButton = styled.button`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    
    &.selected {
        background-color: #4caf50;
        color: white;
        }
        `;

  const WeeklyHoursChart = ({ data }) => {
    const [child, setChild] = useState(data);
    const [allowedContent, setAllowedContent] = useState(adaptorFlags(child.prefs));

    const handleContentChange = (content) => {
      setAllowedContent({
          ...allowedContent,
          [content]: !allowedContent[content],
      });
      
      updateChild(child.id, {screentime: adaptorDatabaseFlags({...allowedContent, [content]: !allowedContent[content]})});
  };

  
  return (
    
    <Graphcontainer>
        <ProfileContainer>
          <ProfileImage src={child.imageURL} alt="Profile Photo" />
          <ProfileName> {child.name} </ProfileName>
          <ContentButtons>
            {Object.keys(allowedContent).map((content) => (
              <ContentButton
              key={content}
              className={allowedContent[content] ? 'selected' : ''}
              onClick={() => handleContentChange(content)}
              >
                {content}
              </ContentButton>
            ))}
          </ContentButtons>
          <ButtonContainer>
            
            <WatchHistoryButton onClick={()=>{window.location.href = `childhistory/${child.id}`}}>
                        <HistoryIcon style={{ fontSize: 'small' }}/>
                        Watch History
            </WatchHistoryButton>
            
            

            <ChangePinButton>
                        <LockIcon style={{ fontSize: 'small' }}/>
                        Change PIN
            </ChangePinButton>

            <DeleteAccountButton>
                        <DeleteIcon style={{ fontSize: 'small' }}/>
                         Delete Account
            </DeleteAccountButton>

            

          </ButtonContainer>
        </ProfileContainer>
        <ResponsiveContainer width="100%" height={400}>
          
        <LineChart data={adaptorScreenTime(child.screenTime)}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 24]} ticks={[0, 4, 8, 12, 16, 20, 24]} />
            <Tooltip />
            <Legend />
            {/* <Area type="monotone" dataKey="hours" fill="#90ee90" stroke="#8ED197" strokeWidth={4} /> */}
            <Line type="monotone" dataKey="hours" stroke="#8ED197" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
</Graphcontainer>
    );
  };

  export default WeeklyHoursChart;

