import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import AuthPage from './pages/Auth';
import Creators from './pages/Creators';
import Profiles from './pages/Profiles';
import AddChild from './pages/AddChild';
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
           
            {/* <Route path="/auth/" element={<AuthPage/>} /> */}
            <Route path="/" element={<Home/>} />
              <Route path="video/:id" element={<Video/>} />
              <Route path="/Creators" element={<Creators/>} />
              <Route path="/Login" element={<AuthPage/>} />
              <Route path="/Profiles" element={<Profiles/>} />
              <Route path="/AddChild" element={<AddChild/>} />
          
          </Routes>

          
        
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

