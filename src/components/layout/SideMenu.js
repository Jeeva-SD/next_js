import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { tabs } from '../../constants';

export default function SideMenu({ show, setShow }) {
    const router = useRouter();

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
        >
            <List>
                {tabs.map((tab, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => router.push(tab.path)}>
                            <ListItemIcon>
                                <tab.icon />
                            </ListItemIcon>
                            <ListItemText primary={tab.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={show}
                    onClose={() => setShow(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}