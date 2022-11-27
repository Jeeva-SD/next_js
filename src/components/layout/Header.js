import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from './SideMenu';
import { tabs } from '../../constants';

export default function Header() {
    const router = useRouter();
    const [show, setShow] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setShow(!show)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Jee6
                    </Typography>
                    {tabs.map(tab => <div key={tab.id}>
                        <Button
                            color="inherit"
                            startIcon={<tab.icon />}
                            onClick={() => router.push(tab.path)}
                        >
                            {tab.title}
                        </Button>
                    </div>)}
                </Toolbar>
            </AppBar>

            <SideMenu
                show={show}
                setShow={setShow}
            />
        </Box>
    );
}