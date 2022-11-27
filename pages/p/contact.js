import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function MediaControlCard() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>
            <Grid container sx={{ flexGrow: 1, paddingTop: '2%' }}>
                <Grid xs md={6} mdOffset={3}>
                    <Item>
                        <Typography variant="h6" component="h6">
                            Contact Jee6
                        </Typography>;
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}