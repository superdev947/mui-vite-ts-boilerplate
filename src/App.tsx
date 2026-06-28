import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Spinner, router } from '@/modules/app/router';
import { AuthProvider } from '@/modules/auth/context';
import { persistor, store } from '@/redux/store';
import { ThemeProvider } from '@/shared/context/ThemeContext';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <ThemeProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
