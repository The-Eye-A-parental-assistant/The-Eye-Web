import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, TextField } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AddIcon from '@mui/icons-material/Add';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import styled from 'styled-components';
import CreatorSide from '../components/CreatorSide';

const Container2 = styled.div`
  display: flex;
  padding-top: 80px;
  padding-left: 20px;
`;

const Main = styled.div`
  flex: 7;
`;



export default function ButtonAppBar() {
    const handleUserAvatarClick = () => {
        console.log('Button clicked!');
    };
    const handleNotificationsClick = () => {

    };
    const handleContactUsClick = () => {

    };
    const handleUpLoadVideoClick = () => {
        console.log('Button clicked!');
    };
    const handleAddButtonClick = () => {

    };
    
    return (
        <Container2>
        <CreatorSide />
        <Main>

        <Box sx={{ flexGrow: 1 }}>
            <Toolbar sx={{ marginBottom: 10 }}>
                <IconButton onClick={handleUserAvatarClick} disableFocusRipple disableRipple>
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg' />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    USER Name
                </Typography>

                <IconButton onClick={handleContactUsClick} disableFocusRipple disableRipple>
                    <Avatar edge="start" sx={{ width: 56, height: 56, mr: 4, backgroundColor: 'black' }}><HeadsetMicIcon /></Avatar>
                </IconButton>
                <IconButton onClick={handleNotificationsClick} disableFocusRipple disableRipple>
                    <CircleNotificationsIcon sx={{ width: 56, height: 56, mr: 2 }} />
                </IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <IconButton onClick={handleUpLoadVideoClick} disableFocusRipple disableRipple>
                        <AddIcon sx={{ fontSize: 100, marginLeft: 64, border: '10px solid green', color: 'green', borderRadius: '10%' }} />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 8, marginLeft: 66 }}>Upload</Typography>
                    <Typography variant="h5" component="div" sx={{ fontFamily: 'Butterfly Kids', marginBottom: 4, fontSize: 60 }}>
                        Kindly upload your video, and we'll handle the rest with care. <SentimentVerySatisfiedSharpIcon />
                    </Typography>

                    <TextField id="title" color='success' label="Title" variant="outlined" fullWidth margin="normal" />
                    <TextField id="description" color='success' label="Description" variant="outlined" fullWidth margin="normal" sx={{ marginBottom: 6 }} />
                    <Button onClick={handleAddButtonClick} disableFocusRipple disableRipple variant="contained" color="success" fullWidth sx={{ marginBottom: 2 }}>
                        Add
                    </Button>
                    <Typography variant="h5" component="div" sx={{ fontFamily: 'Butterfly Kids', marginBottom: 4, fontSize: 40 }}>
                        Your effort is greatly appreciated,  We'll scan your Videos and get them up on site ASAP <SentimentVerySatisfiedSharpIcon />
                    </Typography>
                </div>
            </Box>
        </Box>
        </Main>
        </Container2>
    );
}
