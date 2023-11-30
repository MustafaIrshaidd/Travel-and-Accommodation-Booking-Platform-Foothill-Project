import React from 'react';
import { Registration } from './pages/Registration';
import { RegistrationType } from './pages/Registration/types';
import { AppThemeProvider } from './contexts/AppTheme.context';
import { CustomSnackbar } from './components/CustomSnackbar';
import { useCustomSnackbar } from './hooks/useCustomSnackbar.hook';

function App() {
  const { snackbarProps } = useCustomSnackbar();

  return (
    <AppThemeProvider>
      <Registration type={RegistrationType.SignIn} />
      <CustomSnackbar
        message={snackbarProps.message}
        position={{ vertical: snackbarProps.position.vertical, horizontal: snackbarProps.position.horizontal }}
        type={snackbarProps.type}
      />
    </AppThemeProvider>
  );
}

export default App;
