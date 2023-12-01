import React, { useEffect, useState } from 'react';
import { Snackbar, Box, Alert,useTheme } from '@mui/material';
import { CustomSnackbarProps } from './types';
import { useCustomSnackbar } from '@hooks/useCustomSnackbar.hook';


const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
    message,
    type,
    position: { vertical: positionVertical, horizontal: positionHorizontal },
    autoHideDuration,
}) => {
    const [open, setOpen] = useState(false);
    const { snackbarProps } = useCustomSnackbar();

    useEffect(() => {
        setOpen(true)
    }, [snackbarProps.message, snackbarProps.position, snackbarProps.type, snackbarProps.autoHideDuration])

    const handleClose = () => {
        setOpen(false);
    };

    if(snackbarProps.message ===""){
        return <></>;
    }
    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: positionVertical, horizontal: positionHorizontal }}
                autoHideDuration={autoHideDuration || 3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CustomSnackbar;
