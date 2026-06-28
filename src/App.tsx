import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/config';
import { store } from '@/redux/store';
import { AuthProvider, ThemeProvider } from '@/shared/context';

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
