import { DirectionsSubwayFilled } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <DirectionsSubwayFilled sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Train tickets
                </Typography>
            </Toolbar>
        </AppBar>
    )
}