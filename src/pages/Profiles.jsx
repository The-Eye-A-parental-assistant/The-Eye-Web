import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Avatar, Fab, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Cookies from 'js-cookie';
import { Single_user_fetch } from '../utils/Single_user_fetch';


//  styles for Avatar
const CustomAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: '12px solid #8ED197',
    borderRadius: '50%',
    margin: theme.spacing(7),
}));

//  styles for DialogContent
const CustomDialogContent = styled(DialogContent)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const AddChildFab = styled(Fab)({
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#8ED197',
    color: '#fff',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
});


 async function loadData(setChildren, setParent, UID) {
    let Parent = await Single_user_fetch(UID,setParent);

    const children = Parent.children;

    const childrenData = [];
    for (const child of children) {
        childrenData.push(await Single_user_fetch(child,setChildren));
    }
    setChildren(childrenData);
}

var selected = null;

function Profile() {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');
    const [children, setChildren] = useState([]);
    const [Parent, setParent] = useState(null);

    let UID = Cookies.get('token')
    if (Parent === null){
        loadData(setChildren, setParent, UID);
    }

    const handleParentClick = () => {
        selected = Parent;
        setOpen(true);
    };

    const handleChildClick = (child) => {
        selected = child;
        setOpen(true);
    };

    const handleClose = () => {
        selected = null;
        setId('');
        setOpen(false);
    };

    const handleConfirm = () => {
        if(selected != null && selected.PIN.toString() == id) {
            setId('');
            setOpen(false);

            // create new cookie with child info
            Cookies.set('child', JSON.stringify(selected), { expires: 1 });

            selected = null;
            window.location.href = '/videos';
        }
    };

    const handleAddChild = () => {
        window.location.href = '/addchild';
    };

    const handleChange = (event) => {
        setId(event.target.value);
    };


    return (

        <div style={{ position: 'relative', backgroundImage: 'url("https://www.transparenttextures.com/patterns/robots.png")', width: '100vw', height: '100vh' }}>
        {Parent && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="center">
                <IconButton onClick={handleParentClick}>
                  <CustomAvatar src={Parent.imageURL} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        )}


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm ID</DialogTitle>
                {/* <Typography>Name</Typography> */}
                <CustomDialogContent>
                    <CustomAvatar src={selected != null ? selected.imageURL : "child_avatar.jpg"} />
                    <TextField
                        value={id}
                        onChange={handleChange}
                        label="ID"
                        placeholder="Enter ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px', // Adjust border radius as needed
                            },
                            '& .MuiOutlinedInput-input': {
                                padding: '12px', // Adjust input padding as needed
                            },
                        }}
                    />
                </CustomDialogContent>
                <DialogActions>

                    <Button onClick={handleConfirm} variant="contained" style={{ backgroundColor: '#8ED197' }}>Confirm</Button>
                </DialogActions>
            </Dialog>

            {/* Button to Add a Child */}

            <AddChildFab onClick={handleAddChild}>
                <PersonAddAlt1Icon />
            </AddChildFab>

            {/* Children Avatars */}
            <Grid container spacing={2} justifyContent="center">
            {Array.isArray(children) && children.map((child, index) => (
                <IconButton key={index} onClick={(e) => handleChildClick(child)}>
                    <CustomAvatar src={child.imageURL} />
                </IconButton>
            ))}
        </Grid>
        </div>
    );
}

export default Profile;
