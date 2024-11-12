import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    DialogContentText,
    Typography
} from '@mui/material';

const UsernameLoginModal: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [errorMessage] = useState('');
    const [loading] = useState(false);

    // Open the modal

    // Close the modal
    const handleClose = () => {
        setOpen(false);
        console.log("closed")

    };

    // Handle login logic (check if username is taken)
    const handleLogin = async () => {
        setOpen(false);
        console.log("log in")
    };

    return (
        <div>
            {/* The login modal (Dialog component) */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="login-dialog-title">
                <DialogTitle id="login-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please enter your username.</DialogContentText>

                    {/* Username input */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(_e) => console.log("hi")}
                        error={!!errorMessage}
                        helperText={errorMessage}
                    />

                    {/* Error message */}
                    {errorMessage && (
                        <Typography color="error" variant="body2">
                            {errorMessage}
                        </Typography>
                    )}
                </DialogContent>

                {/* Action buttons for the modal */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogin} color="primary" variant="contained" disabled={loading}>
                        {loading ? 'Checking...' : 'Login'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UsernameLoginModal;
