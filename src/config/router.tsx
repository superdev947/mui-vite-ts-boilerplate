import { createBrowserRouter } from 'react-router-dom';

// Pages
import {
  AdminReportsPage,
  AdminUsersPage,
  DashboardPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  SettingsPage,
  SignupPage,
} from '@/pages';
// Components
import { ProtectedRoute } from '@/shared/components';
// Layouts
import { AdminLayout, DashboardLayout, PublicLayout } from '@/shared/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute requiredRoles={['admin']}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'users',
        element: <AdminUsersPage />,
      },
      {
        path: 'reports',
        element: <AdminReportsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
