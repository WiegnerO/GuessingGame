import { Box, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';

interface Props {
    // Define your props here
    /* propName: propType; */
}

const GuessingGameList: React.FC<Props> = ({ /* props */ }) => {
    const items = Array.from({ length: 30 }, (_, index) => `Room ${index + 1}`);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '91vh',
                bgcolor: '#f5f5f5', // Background color for contrast
            }}
        >
            <Paper elevation={3} style={{ maxWidth: '650px', width: '100%', maxHeight: '600px', height: '100%' }}>
                <Box
                    sx={{
                        minHeight: '100px', // Increase the height of the title section
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#c9d7f2',
                    }}>
                    <Typography variant="h6" gutterBottom sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        Guessing Game Rooms
                    </Typography>
                </Box>
                <List
                    style={{
                        maxHeight: '450px',
                        overflowY: 'auto',
                    }}
                >
                    {items.map((item, index) => (
                        <ListItem key={index}
                            style={{
                                backgroundColor: index % 2 === 1 ? '#f5f5f5' : 'white',
                            }}>
                            <ListItemText primary={item} />
                            <Button variant="contained" color="primary">
                                Join Room
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};
export default GuessingGameList;