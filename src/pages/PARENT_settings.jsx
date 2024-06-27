import React, { useState } from 'react';
import { Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Box, Backdrop, Grid, Container, Paper } from '@mui/material';
import styled from 'styled-components';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LockResetIcon from '@mui/icons-material/LockReset';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ChildSide from "../components/ChildSide";
import ParentNav from "../components/ParentNav";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Container2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
      background-image: url("https://www.transparenttextures.com/patterns/robots.png");
      height: 100vh;

`;

const Main = styled.div`
  flex: 7;
`;

const CustomDialogContent = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

});

const DialogStyle = styled(Dialog)({
  '& .MuiPaper-root': {
    width: '60%',
    minHeight: '300px',
    backgroundColor: '#A1C398',
    borderRadius: '20px',
  },
});

const ButtonStyle = styled(Button)({
  borderRadius: '30px',
  width: '150px',
  padding: '15px 30px',
  fontSize: '1rem',
  margin: '0 auto', 
  color: '#fff', 
  '&:hover': {
    backgroundColor: '#2EC1AC', 
  },
});

const BackdropStyle = styled(Backdrop)({
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
});

function FirstTry() {
  const [openNameDialog, setOpenNameDialog] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openChangeIdDialog, setOpenChangeIdDialog] = useState(false);
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newId, setNewId] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleClose = () => {
    setOpenNameDialog(false);
    setOpenPasswordDialog(false);
    setOpenConfirmationDialog(false);
    setOpenDeleteDialog(false);
    setOpenChangeIdDialog(false);
    setOpenContactDialog(false);
  };

  return (
    <Container2>
      {/* <ChildSide /> */}
        <ParentNav />
      <Main>
        
        <div style={{ textAlign: 'center', marginTop: '150px', }}>
        <Container maxWidth="lg" style={{ marginBottom: '40px' }}>
            
            
          <Paper variant="outlined" style={{ padding: '20px', borderColor: '#8ED197',borderWidth:'2px', height: '58vh',backgroundImage: 'url("https://www.transparenttextures.com/patterns/robots.png")', boxShadow: '0px 0px 100px rgba(0, 0, 0, 0.5)' }}>
        <Grid container direction="column" spacing={4.5} sx={{ '& .MuiButton-root': { height: '6vh' } }}>

            <Grid item>
                <Button fullWidth variant="contained" color='success' onClick={() => setOpenNameDialog(true)} sx={{ borderRadius: '10px',backgroundColor:'#6CB066' }}>Change Name <DriveFileRenameOutlineIcon sx={{ ml: '20px' }} /></Button>
            </Grid>
            <Grid item>
                <Button fullWidth variant="contained" color='success' onClick={() => setOpenPasswordDialog(true)} sx={{ borderRadius: '10px',backgroundColor:'#6CB066' }}>Change Password <LockResetIcon sx={{ ml: '20px' }} /></Button> 
            </Grid>
            <Grid item>
                <Button fullWidth variant="contained" color='success' onClick={() => setOpenChangeIdDialog(true)} sx={{ borderRadius: '10px',backgroundColor:'#6CB066' }}>Change PIN <FiberPinIcon sx={{ ml: '20px' }} /></Button> 
            </Grid>

            <Grid item>
                <Button fullWidth variant="contained"  onClick={() => (true)} color='success' sx={{ borderRadius: '10px' ,backgroundColor:'#6CB066' }}>Sign Out <ExitToAppIcon sx={{ ml: '20px' }} /></Button>
            </Grid>

            <Grid item>
                <Button fullWidth variant="contained" onClick={() => setOpenContactDialog(true)} color='error' sx={{ borderRadius: '10px' ,backgroundColor:'#A92303' }}>Report Video <ReportGmailerrorredIcon sx={{ ml: '20px' }} /></Button>
            </Grid>

            
            
        </Grid>
              {/* <Grid container direction="column" spacing={4.5}>

                    <Grid item>
                    <Button fullWidth variant="contained" color='success' onClick={() => setOpenNameDialog(true)} sx={{ borderRadius: '30px', height: '5vh' }}>Change Name</Button>
                    </Grid>

                    <Grid item>
                    <Button fullWidth variant="contained" color='success' onClick={() => setOpenPasswordDialog(true)} sx={{ borderRadius: '30px', height: '5vh' }}>Change Password</Button>
                    </Grid>

                    <Grid item>
                    <Button fullWidth variant="contained" color='success' onClick={() => setOpenChangeIdDialog(true)} sx={{ borderRadius: '30px', height: '5vh' }}>Change ID</Button>
                    </Grid>
                    
                    <Grid item>
                    <Button fullWidth variant="contained" onClick={() => setOpenContactDialog(true)} color='error' sx={{ borderRadius: '30px', height: '5vh' }}>Report Video</Button>
                    </Grid>
              </Grid> */}
            </Paper>
        </Container>

          <DialogStyle open={openNameDialog} onClose={handleClose}>
            <CustomDialogContent dividers>
              <Typography color={'white'} variant="h5">Old Name</Typography>
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="new Name" placeholder="Enter new Name" value={name} color='success' onChange={(e) => setName(e.target.value)} />
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='success' sx={{ borderRadius: "10px" , marginRight:'220px' }}>Confirm</ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <DialogStyle open={openPasswordDialog} onClose={handleClose}>
            <DialogTitle>Change Password</DialogTitle>
            <CustomDialogContent dividers>
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="Old Password" type="password" placeholder="Old Password" value={oldPassword} color='success' onChange={(e) => setOldPassword(e.target.value)} />
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="New Password" type="password" placeholder="New Password" value={newPassword} color='success' onChange={(e) => setNewPassword(e.target.value)} />
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="Confirm Password" type="password" placeholder="Confirm Password" value={confirmPassword} color='success' onChange={(e) => setConfirmPassword(e.target.value)} />
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='success' sx={{ borderRadius: "10px" , marginRight:'220px' }}>Confirm</ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <DialogStyle open={openConfirmationDialog} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>
            <CustomDialogContent dividers>
              <Typography variant="h4" style={{ color: 'red' }}>Are you sure</Typography>
              <Typography variant="h5" style={{ color: 'red' }}>you want to</Typography>
              <Typography variant="h6" style={{ color: 'red' }}>leave us ?! </Typography>
              <Typography variant="h6" style={{ color: 'red' }}><SentimentDissatisfiedIcon sx={{ color: 'red', ml: '2px' }} /> </Typography>
              <Typography variant="h6" color={'white'}>We see you as part of our family and would love to keep you with us.</Typography>
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="You can tell us what's wrong" placeholder="You can tell us what's wrong" color='error' />
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='error' sx={{ borderRadius: "10px" , marginRight:'220px' }}>Delete <SentimentVeryDissatisfiedIcon sx={{ ml: '2px' }} /></ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <DialogStyle open={openDeleteDialog} onClose={handleClose}>
            <DialogTitle>Delete Child?</DialogTitle>
            <CustomDialogContent dividers>
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '30px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="Child Name" placeholder="Which child ?" value={newId} color='error'  onChange={(e) => setNewId(e.target.value)} />
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='error' sx={{ borderRadius: "30px" , marginRight:'220px' }}>Delete</ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <DialogStyle open={openChangeIdDialog} onClose={handleClose}>
            <CustomDialogContent dividers>
              <Typography variant="h4">Change PIN</Typography>
             
             
              <TextField fullWidth
                inputProps={{ style: { backgroundColor: 'white', borderRadius: '10px' } }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px',
                  },
                }} label="Enter new PIN" placeholder="Enter new PIN" value={newId} color='success' onChange={(e) => setNewId(e.target.value)} />
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='success' sx={{ borderRadius: "30px" , marginRight:'220px' }}>Confirm</ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <DialogStyle open={openContactDialog} onClose={handleClose}>
            <DialogTitle>Report Video</DialogTitle>
            <CustomDialogContent dividers>
              <Typography color={'white'} variant='h6'>Your feedback matters. We will investigate the reported video issue to ensure the best experience for you. Thank you for your understanding and patience.</Typography>
            </CustomDialogContent>
            <DialogActions>
              <ButtonStyle onClick={handleClose} variant="contained" color='error' sx={{ borderRadius: "10px" , marginRight:'220px' }}>Report</ButtonStyle>
            </DialogActions>
          </DialogStyle>

          <div>
            <ButtonStyle variant="contained" color="error" onClick={() => setOpenConfirmationDialog(true)} sx={{ borderRadius: '30px', height: '5vh', width: '400px',backgroundColor:'#A92303' }}>Leave Us <SentimentDissatisfiedIcon sx={{ ml: '20px' }} /></ButtonStyle>
          </div>

          {(openNameDialog || openPasswordDialog || openConfirmationDialog || openDeleteDialog || openChangeIdDialog || openContactDialog) && (
            <BackdropStyle
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            />
          )}
        </div>
      </Main>
    </Container2>
  );
}

export default FirstTry;
