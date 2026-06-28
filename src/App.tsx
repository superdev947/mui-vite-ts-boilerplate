import { router } from '@/config';
import { AuthProvider } from '@/shared/context';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
