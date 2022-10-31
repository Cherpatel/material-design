import { Box, Typography } from '@mui/material';


export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Thanks
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >This is my first introduction to material design and the material-ui library.</Typography>
        </Box>
    )
}