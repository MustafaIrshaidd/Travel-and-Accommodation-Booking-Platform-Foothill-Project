import { useContext } from 'react';
import { CustomSnackbarContext } from '@contexts/CustomSnackbar.context';

export const useCustomSnackbar = () => {
  const context = useContext(CustomSnackbarContext);
  
  if (!context) {
    throw new Error('useCustomSnackbarContext must be used within a CustomSnackbarProvider');
  }

  return context;
};