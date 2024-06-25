import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
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
import LikedVids from './pages/LikedVids';
import DislikedVids from './pages/DislikedVids';
import SavedVids from './pages/SavedVids';
import CreatorsCREATOR from './pages/Creators_creator';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



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
  return (
    <Container>
      <BrowserRouter>
      
      
      {/* <Menu /> */}
      <Main>
        {/* <Navbar/> */}
        {/* <Wrapper> */}
          

        <Routes>
          <Route path="/" element={<Graphs/>} />

          <Route path="/login" element={<AuthPage/>} />
          <Route path="/profiles" element={<Profiles/>} />



          <Route path="video/:id" element={<Video/>} />

          <Route path="/videos" element={<Home/>} />
          
          <Route path="/history" element={<History/>} />
          <Route path="/likedvids" element={<LikedVids/>} />
          <Route path="/dislikedvids" element={<DislikedVids/>} />
          <Route path="/saved" element={<SavedVids/>} />

          <Route path="/addchild" element={<AddChild/>} />

          <Route path="/creatorchannel-CH/:id" element={<CreatorChannelCHILD/>} />
          <Route path="/creatorchannel-CR/:id" element={<CreatorChannelCREATOR/>} />

          <Route path="/creators-CH" element={<CreatorChannelCHILD/>} />
          <Route path="/creators-CR" element={<CreatorsCREATOR/>} />

          <Route path="/upload" element={<Uppage/>} />
          
        
        </Routes>

          
        
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

