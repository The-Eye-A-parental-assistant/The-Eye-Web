import React from 'react';
import Divider from '@mui/material/Divider';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container,
} from '@mui/material';
import ChildSide from '../components/ChildSide';
// A single subscription card component

const SubscriptionCard = ({ name, subscribers, imageUrl }) => (
    <Card sx={{ maxWidth: 345 , height:350 }}>
        <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={`${name}`}
            sx={{
                borderRadius: '50%',
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                margin: 'auto',
                display: 'block',
                marginTop: '10px',
                marginBottom:'10px'
                }}
        />
        <CardContent>
        
            <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '30px',marginBottom:'10px'}}>
                {name}
            </Typography>
            <Typography variant="body2" sx={{marginTop: '30px',marginBottom:'20px'}} color="text.secondary">
                {subscribers} 
            </Typography>
            <Divider />
        </CardContent>
    </Card>
);

// Main component that renders the grid of subscription cards
const SubscriptionPage = ({ subscriptions }) => {
    return (
        <Container sx={{mt:'40px'}} >
            
            <ChildSide/>
            {/* to be ADDED  W SHEEL EL BOX EL*/}
            <Grid container spacing={8}sx={{ paddingTop: '80px' }}>
                {subscriptions.map((subscription, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3} >
                        <SubscriptionCard
                            name={subscription.name}
                            subscribers={subscription.subscribers}
                            imageUrl={subscription.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

// Example subscription data
const subscriptions = [
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    {
        name: 'Oktay Candan',
        subscribers: '23 Subscribers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg', // Replace with actual image path
    },
    // ...other subscription objects
];

const App2 = () => {
    return <SubscriptionPage subscriptions={subscriptions} />;
};

export default App2;
