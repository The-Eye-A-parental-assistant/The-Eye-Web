import React, { useState } from 'react';
import WeeklyHoursChart from '../components/weeklyhrschart';
import styled from 'styled-components';
import ParentNav from '../components/ParentNav';


const Wrapper = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/robots.png");
  padding-top: 60px;
  `;

const Graphs = () => {
  const [data, setData] = useState([
    { name: 'Sunday', hours: 8 },
    { name: 'Monday', hours: 7 },
    { name: 'Tuesday', hours: 6 },
    { name: 'Wednesday', hours: 5 },
    { name: 'Thursday', hours: 8 },
    { name: 'Friday', hours: 10 },
    { name: 'Saturday', hours: 4 },
  ]);

 
  ///////////////////////////////////////////////////////////////////////////
  

  return (
    <Wrapper>
    <ParentNav/>
    <div>
      <WeeklyHoursChart data={data} />
      <WeeklyHoursChart data={data} />
      <WeeklyHoursChart data={data} />

    </div>
        </Wrapper>
  );
};

export default Graphs;
