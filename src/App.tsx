import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/redux/store';
import { router } from '@/router';
import { AuthProvider } from '@/shared/context/AuthContext';
import { ThemeProvider } from '@/shared/context/ThemeContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
