import styled from 'styled-components';
import Home from './pages/Home';
import Video from './pages/Video';
import AuthPage from './pages/Auth';
import CreatorsCHILD from './pages/Creators_child';
import Profiles from './pages/Profiles';
import AddChild from './pages/AddChild';
import CreatorChannelCHILD from './pages/CreatorChannel_child';
import CreatorChannelCREATOR from './pages/CreatorChannel_creator';
import Graphs from './pages/Graphs';
import Uppage from './pages/UpPage';
import History from './pages/History';
import ChildHistory from './pages/HistoryParent';
import LikedVids from './pages/LikedVids';
import DislikedVids from './pages/DislikedVids';
import SavedVids from './pages/SavedVids';
import CreatorsCREATOR from './pages/Creators_creator';
import SettingsCreator from './pages/CREATOR_settings';
import SettingsParent from './pages/PARENT_settings'; 
import ContactSupport from './pages/ContactSupport';
import  Intro from './pages/Intro';
import Slider from './pages/Slider';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';




const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;

  
`;
const Wrapper = styled.div`
//  padding: 22px 96px;
 padding: 12px 12px;

`;



function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 13000); 
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Container>
      <BrowserRouter>
      
      
      {/* <Menu /> */}
      <Main>
        {/* <Navbar/> */}
        {/* <Wrapper> */}
          

        <Routes>
        <Route path="/" element={showIntro ? <Intro /> : <Slider />} />
          <Route path="/parent" element={<Graphs/>} />
          <Route path="video/:id" element={<Video/>} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/profiles" element={<Profiles/>} />

          <Route path="/settings-Pr" element={<SettingsParent/>} />
          <Route path="/settings-Cr" element={<SettingsCreator/>} />


          <Route path="video/:id" element={<Video/>} />

          <Route path="/videos" element={<Home/>} />
          <Route path="/addchild" element={<AddChild/>} />
          
          <Route path="/history" element={<History/>} />
          <Route path="/childhistory/:id" element={<ChildHistory/>} />
          <Route path="/likedvids" element={<LikedVids/>} />
          <Route path="/dislikedvids" element={<DislikedVids/>} />
          <Route path="/saved" element={<SavedVids/>} />

          <Route path="/creatorchannel-CH/:id" element={<CreatorChannelCHILD/>} />
          <Route path="/creatorchannel-CR/:id" element={<CreatorChannelCREATOR/>} />

          <Route path="/creators-CH" element={<CreatorsCHILD/>} />
          <Route path="/creators-CR" element={<CreatorsCREATOR/>} />

          <Route path="/upload" element={<Uppage/>} />
          <Route path="/support" element={<ContactSupport/>} /> 
          
        
        </Routes>

          
        
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

