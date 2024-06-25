import React, { useEffect, useState } from 'react';
import WeeklyHoursChart from '../components/weeklyhrschart';
import styled from 'styled-components';
import ParentNav from '../components/ParentNav';
import { db } from '../utils/firebaseinit';
import Cookies from 'js-cookie';
import { Single_user_fetch } from '../utils/Single_user_fetch';


const Wrapper = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/robots.png");
  padding-top: 60px;
  `;

async function loadData(setChildren, setParent, UID) {
  let Parent = await Single_user_fetch(UID,setParent);

  const children = Parent.children;

  const childrenData = [];
  for (const child of children) {
    let childData = await Single_user_fetch(child,()=>{});
    childrenData.push(childData);
  }
  setChildren(childrenData);
}

const Graphs = () => {
  const [parent, setParent] = useState(null);
  const [children, setChildren] = useState([]);

  useEffect(()=>{
    const parentID = Cookies.get('token');
    if (parent === null){
      loadData(setChildren, setParent, parentID);
    }
  });

 
  ///////////////////////////////////////////////////////////////////////////
  

  return (
    <Wrapper>
    <ParentNav/>
    <div>
      {children.map((child) => <WeeklyHoursChart key={child.id} data={child} />)}
    </div>
        </Wrapper>
  );
};

export default Graphs;
