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
import { db } from '../utils/firebaseinit';
import { collection, query, where, getDocs } from "firebase/firestore";
import Creator from '../models/Creator';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

const Container2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
`;

const Main = styled.div`
  flex: 7;

  
`;
const Container3 = styled.div`
  display: flex;
  gap: 24px;
  padding: 5px;
`;

const Content = styled.div`
  flex: 5;
`;

// A single subscription card component
const SubscriptionCard = ({ creator }) => (
    <Link to={`/creatorchannel-CH/${creator.id}`} style={{textDecoration:"none",color:"inherit"}}>

    <Card sx={{ maxWidth: 345 , height:350 }}>
        <CardMedia
            component="img"
            height="140"
            image={creator.imageURL}
            alt={creator.nam}
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
                {creator.name}
            </Typography>
            <Typography variant="body2" sx={{marginTop: '30px',marginBottom:'20px'}} color="text.secondary">
                {`${creator.videos.length} videos`} 
            </Typography>
            <Divider />
        </CardContent>
    </Card>
    </Link>
);


// Main component that renders the grid of subscription cards
const SubscriptionPage = () => {
    const [subscriptions, setSubscriptions] = React.useState([]);
    React.useEffect(() => {
        const q = query(collection(db, "users"), where("role", "==", "creator"));

        getDocs(q).then((querySnapshot) => {
            const creators = []
            querySnapshot.forEach((doc) => creators.push(Creator.fromFirestore(doc)));
            setSubscriptions(creators);
        });
    }, []);

    return (
    <Container2>
                
            
        {/* <Container sx={{mt:'40px'}} > */}
            
            <ChildSide/>
            {/* <ResponsiveContainer width="100%"> */}

            <Main>

             {/* <Container3>
             <Content> */} 

  
            {/* to be ADDED  W SHEEL EL BOX EL*/}
                <Grid container spacing={8}sx={{ paddingTop: '80px' }}>
                    {subscriptions.map((subscription, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3} >
                        <SubscriptionCard creator={subscription}/>
                        </Grid>
                    ))}
                </Grid>
                    {/* </Content>
                    </Container3>  */} 
                    </Main> 
                    {/* </ResponsiveContainer> */}
        {/* </Container> */}
    </Container2>
    );
};

export default SubscriptionPage;
