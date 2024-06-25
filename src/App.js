import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import AuthPage from './pages/Auth';
import Creators from './pages/Creators';
import Profiles from './pages/Profiles';
import AddChild from './pages/AddChild';
import CreatorChannel from './pages/CreatorChannel2';
import Graphs from './pages/Graphs';
import Uppage from './pages/UpPage';
import History from './pages/History';
import LikedVids from './pages/LikedVids';
import DislikedVids from './pages/DislikedVids';
import SavedVids from './pages/SavedVids';
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
          <Route path="/" element={<AuthPage/>} />
          <Route path="/parent" element={<Graphs/>} />
          <Route path="video/:id" element={<Video/>} />
          <Route path="/creators" element={<Creators/>} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/profiles" element={<Profiles/>} />
          <Route path="/videos" element={<Home/>} />
          <Route path="/addchild" element={<AddChild/>} />
          <Route path="/creator/:id" element={<CreatorChannel/>} />
          <Route path="/upload" element={<Uppage/>} />
          
          <Route path="/history" element={<History/>} />
          <Route path="/likedvids" element={<LikedVids/>} />
          <Route path="/dislikedvids" element={<DislikedVids/>} />
          <Route path="/saved" element={<SavedVids/>} />
        </Routes>

          
        
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

