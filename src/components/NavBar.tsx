import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { retrieveUsername, storeUsername } from '../lib/sessionStorage';
import { logoutApiCall } from '../lib/loginLogoutFunctionaility';

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // Check if the user is logged in on component mount
    useEffect(() => {
        const username = retrieveUsername();
        setIsLoggedIn(!!username); // Set true if username exists, otherwise false
    }, []);

    // Handle login
    const handleLogin = () => {
        const username = 'john_doe'; // In a real app, you'd get this from user input or authentication
        storeUsername(username);
        setIsLoggedIn(true); // Update state to logged in
    };

    const handleLogout = async () => {
        try {
            await logoutApiCall(0);
            setIsLoggedIn(false); // Update state to logged out
        } catch (error) {
            alert(error);
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        Guessing Game Website
                    </Typography>
                    <div style={{ marginLeft: 'auto' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={isLoggedIn ? handleLogout : handleLogin}
                        >
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

