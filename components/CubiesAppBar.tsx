import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthenticationContext } from '@/contexts/AuthenticationContext';
import { useRouter } from 'next/navigation';

export default function CubiesAppBar() {
    const { logout } = useAuthenticationContext()
    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open-drawer"
                        sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Coin Hunt Stats
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open-drawer"
                        sx={{ mr: 2, ml: 2 }}
                        onClick={logout}
                        >
                            <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}