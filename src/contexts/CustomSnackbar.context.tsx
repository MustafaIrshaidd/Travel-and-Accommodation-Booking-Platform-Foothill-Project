import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { CustomSnackbarProps } from '@components/CustomSnackbar/types';

interface CustomSnackbarContextProps {
    snackbarProps: CustomSnackbarProps;
    setSnackbarProps: Dispatch<SetStateAction<CustomSnackbarProps>>;
}

export const CustomSnackbarContext = createContext<CustomSnackbarContextProps | undefined>(undefined);

export const CustomSnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        message: "",
        type: 'info',
        position: { vertical: 'top', horizontal: 'center' },
        autoHideDuration: 3000,
    });

    return (
        <CustomSnackbarContext.Provider value={{ snackbarProps, setSnackbarProps }}>
            {children}
        </CustomSnackbarContext.Provider>
    );
};
