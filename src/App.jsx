import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './Components/Header';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

import './App.css';
import Footer from './Components/Footer';


const arr = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
]


export default function App() {
    return (
    <>
        <Header />
        <main>
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                    >Choose your ticket</Typography>
                </Container>
            </Box>

            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {arr.map((elem, index) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    image={`https://picsum.photos/${1000 + index}`}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Great trip
                                    </Typography>
                                    <Typography>
                                        Description of the trip
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium">Choice</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box
                sx={{
                    pt: 6
                }}
                >
                    <Container>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    When planning your trip from Moscow to St. Petersburg and thinking of the most comfortable and fastest way to travel, book your Sapsan tickets with us in advance and save up
                    </Typography>
                    </Container>
                </Box>
            </Container>
        </main>
        <Footer />
    </>
    )
}
