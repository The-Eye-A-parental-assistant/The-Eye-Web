
import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Profile from './Profiles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Avatar from '@mui/material/Avatar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Cookies from 'js-cookie';

// ---------------------------------------------------------------------
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));



// ---------------------------------------------------------------------

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {

    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);




export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box 
        // sx={{
        //     display: 'flex',
        //     minHeight: '40vh',
        //     backgroundColor: '#F0E5FF',
            // backgroundImage: 'url("https://www.transparenttextures.com/patterns/robots.png");',
            // url("https://www.transparenttextures.com/patterns/food.png");
            //'url("https://www.transparenttextures.com/patterns/foggy-birds.png");', backgroundColor: '#00a698'
            // url("https://www.transparenttextures.com/patterns/black-scales.png");
            // url("https://www.transparenttextures.com/patterns/cartographer.png");
            //url("https://www.transparenttextures.com/patterns/food.png"); 
        // }}
        >
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#8ED197' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <VisibilityIcon sx={{ ml: 2, mr: 2 }} />
                  
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 40 , paddingLeft: '20px'}}
                    >
                        The Eye
                    </Typography>
                    <Search className='flex-grow-1' sx={{ ml: 50, mr: 50, borderRadius: 20 }} >
                        <SearchIconWrapper sx={{ color: 'white' }}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        //   aria-controls={menuId}
                        aria-haspopup="true"
                        //   onClick={handleProfileMenuOpen}
                        color="inherit"
                        sx={{ mr: 2, ml: 5 }}
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer sx={{ backgroundColor: '#8ED197' }} variant="permanent" open={open} >
                <DrawerHeader sx={{ backgroundColor: '#8ED197' }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                
               <List sx={{ backgroundColor: '#8ED197' }}>
    {/* ###################################################################### */}
    <Link to={`/creatorchannel-CR/${Cookies.get('token')}`} style={{textDecoration:"none",color:"inherit"}}>
    <ListItem key='Home' disablePadding sx={{ display: 'block' }}>
        <ListItemButton
            sx={{
                minHeight: 118,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
            >
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
    </ListItem>
    </Link>
    
    {/* ###################################################################### */}
    <Link to='/upload' style={{textDecoration:"none",color:"inherit"}}>
    <ListItem key='Upload' disablePadding sx={{ display: 'block' }}>
        <ListItemButton
            sx={{
                minHeight: 118,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
            >
                <FileUploadIcon />
            </ListItemIcon>
            <ListItemText primary='Upload' sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
    </ListItem>
    </Link>
        {/* ###################################################################### */}
        <Link to='/support' style={{textDecoration:"none",color:"inherit"}}>

        <ListItem key='Contact Support' disablePadding sx={{ display: 'block' }}>
        <ListItemButton
            sx={{
                minHeight: 118,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
            >
                <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText primary='Contact Support' sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
    </ListItem>
    </Link>
        {/* ###################################################################### */}



</List>
                <Divider />
                
   
                <List sx={{ backgroundColor: '#8ED197' }}>
                    {[ 'Browse channels'].map((text, index) => (
                        
                            <Link to='/creators-CR' style={{textDecoration:"none",color:"inherit"}}>

                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            
                            <ListItemButton
                                sx={{
                                    minHeight: 118,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    >
                                    {text === 'Browse channels' && <AddCircleOutlineIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                                            </Link>
                    ))}
                </List>
                
            {/* ###################################################################### */}

                <Divider />
                <Link to='/settings-Cr' style={{textDecoration:"none",color:"inherit"}}>
                <List sx={{ backgroundColor: '#8ED197' }} className='flex-grow-1'>
                    {['Settings'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 117,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {text === 'Settings' && <SettingsIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                </Link>
               
                
              
            </Drawer>
           
            
        </Box>
    );
}
