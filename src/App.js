import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import AuthPage from './pages/Auth'
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
      
      
      <Menu />
      <Main>
        <Navbar/>
        <Wrapper>
          
          
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="video">
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Route>
            <Route path="/auth/" element={<AuthPage/>} />
          </Routes>

          
        
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
  );
}


export default App;

