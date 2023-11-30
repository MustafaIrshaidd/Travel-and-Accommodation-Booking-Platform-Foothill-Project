import { AlertColor } from "@mui/material"

export interface CustomSnackbarPosition {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
}

export interface CustomSnackbarProps {
    message: string;
    type : AlertColor|undefined;
    position: CustomSnackbarPosition;
    autoHideDuration?: number;
}