
import React from 'react';
import styled from 'styled-components';


import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleIcon from '@mui/icons-material/AddCircle';


import Avatar from '@mui/material/Avatar';

const ProfileIcon = styled(Avatar)`
    width: 24px;
    height: 24px;
`;

const IconWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    width: 70px;
    margin-right: 80px;

    @media (max-width: 868px){
         margin-right: 20px;
    
    }

`;

const Container = styled.div`
position: sticky;
top: 0;
background-color: #8ED197;
height: 56px;

`
const Item = styled.div`
cursor: pointer;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
padding: 0 20px;
justify-content: flex-end;
/**
 * 5aleha relative 3ashan lma t7ot 7aga tt8ayar t-adapt 3aleha
 */
     
position: relative;

@media (max-width: 868px) {
    justify-content: center;
    padding: 0 10px;
  }

`
const Search = styled.div`
position: absolute;
left: 0px;
right: 0px;
margin: auto;
/**
 * since enk 3amlt absolute yb2a 7atb2a 100% f 7aded el width 3ashan tozbot
 */
width: 40%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border-radius: 10px;

@media (max-width: 868px) {
    width: 50%;
    position: relative;
   
  }


`
const Input = styled.input`
border: none;
background-color: transparent;`
const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Search>
                    {/** el lon msh rady yt8ayar bta3 kelmet search */}
                    <Input placeholder="Search" style={{color: 'red', placeholder: { color: 'red' }}}/>
                    
                    <SearchIcon/>
                </Search>
                <IconWrapper>
                <Item>
                    <AddCircleIcon/>
                    
                </Item>
                <Item>
                    <NotificationsIcon/>
                </Item>
                </IconWrapper>
                
                
                <ProfileIcon src= 'img/Profilepic.jpg'/>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar;