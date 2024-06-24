import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import AuthPage from './pages/Auth';
import Creators from './pages/Creators';
import Profiles from './pages/Profiles';
import AddChild from './pages/AddChild';
import CreatorChannel from './pages/CreatorChannel';
import Graphs from './pages/Graphs';
import Uppage from './pages/UpPage';
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
          <Route path="video/:id" element={<Video/>} />
          <Route path="/creators" element={<Creators/>} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/profiles" element={<Profiles/>} />
          <Route path="/videos" element={<Home/>} />
          <Route path="/addchild" element={<AddChild/>} />
          <Route path="/creatorchannel/:id" element={<CreatorChannel/>} />
          <Route path="/upload" element={<Uppage/>} />
        </Routes>

          
        
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

