
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logosmall from '../img/Logosmall.png';
import FerdiCikdiz from '../img/FerdiCildiz.png';


import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';

const IconImg = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
`;
const Container = styled.div`
flex: 1.4;
background-color: #8ED197;
height: 100vh;
max-height: 100vh;
overflow-y: auto;
color: white;
font-size: 14px;
position: sticky;
top: 0;
`

const Wrapper = styled.div`
padding: 18px 26px;
`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: bold;
margin-bottom: 25px;
cursor: pointer;
`
const Img = styled.img`
height: 25px;`

const Item = styled.div`
display: flex;
align-items: center;
gap: 25px;
cursor: pointer;
padding: 6.5px 0px;

&:hover{
   background-color: lightgray; 
}
`

const SubscriptionsItem = styled.div`
display: flex;
align-items: center;
gap: 25px;
cursor: pointer;
padding: 6.5px 0px;
`
const Txtitem = styled.div`
color: black;
font-family:  'poppins';
font-weight: 500;
`
const Hr= styled.hr`
margin: 15px opx ;
border: 0.5px solid white;`


const Menu = () => {
    return(

        
        <Container>
        <Wrapper>

        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Img src={Logosmall}/>
                The Eye
            </Logo>
        </Link>
                <Item>
                    <HomeIcon/>
                   <Txtitem>
                   Home
                   </Txtitem> 
                </Item>


                <Item>
                    <LocalFireDepartmentIcon/>
                    <Txtitem>
                   Trending
                   </Txtitem>
                </Item>


                <Item>
                    <SubscriptionsIcon/>
                    <Txtitem>
                   Subscriptions
                   </Txtitem>
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryIcon/>
                    <Txtitem>
                     Library   
                    </Txtitem>
                </Item>
                
                <Item>
                    <HistoryIcon/>
                    <Txtitem>
                    History
                    </Txtitem>
                </Item>

                <Item>
                    <SlideshowIcon/>
                    <Txtitem>
                    Your Videos
                    </Txtitem>
                </Item>

                <Item>
                    <WatchLaterIcon/>
                    <Txtitem>
                    Watch Later
                    </Txtitem>
                </Item>

                <Item>
                    <ThumbUpIcon/>
                    <Txtitem>
                    Liked Videos
                    </Txtitem>
                </Item>
                <Hr/>
                <SubscriptionsItem>
                <IconImg src={FerdiCikdiz}/> <Txtitem>Oktay Candan</Txtitem>
                </SubscriptionsItem>
                
                
                <Item>
                    <AddCircleIcon/>
                    <Txtitem>
                    Browse Channels
                    </Txtitem>
                </Item>
                <Hr/>
                <Item>
                
                <Img src={Logosmall}/>
                

                    <Txtitem>
                    Premium
                    </Txtitem>
                </Item>

                <Item>
                    <CellTowerIcon/>
                    <Txtitem>
                    Live
                    </Txtitem>
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    <Txtitem>
                    Settings
                    </Txtitem>
                </Item>

                <Item>
                    <FlagIcon/>
                    <Txtitem>
                    Edit Flags
                    </Txtitem>
                </Item>

                <Item>
                    <HelpIcon/>
                    <Txtitem>
                    Help
                    </Txtitem>
                </Item>
                
                <Item>
                    <FeedbackIcon/>
                    <Txtitem>
                    Send Feedback
                    </Txtitem>
                </Item>
                
        </Wrapper>
        </Container>
    )
}

export default Menu;