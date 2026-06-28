import { RouterProvider } from 'react-router-dom';

import { router } from '@/config';
import { AuthProvider, ThemeProvider } from '@/shared/context';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
