import { Box, CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { NotFoundPage } from '@/pages/notFound/NotFoundPage';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import AdminLayout from '@/shared/layouts/AdminLayout';
import DashboardLayout from '@/shared/layouts/DashboardLayout';
import PublicLayout from '@/shared/layouts/PublicLayout';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const LoginPage = lazy(() => import('@/pages/login/LoginPage'));
const SignupPage = lazy(() => import('@/pages/signup/SignupPage'));
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const ProfilePage = lazy(() => import('@/pages/profile/ProfilePage'));
const SettingsPage = lazy(() => import('@/pages/settings/SettingsPage'));
const AdminUsersPage = lazy(() => import('@/pages/adminUsers/AdminUsersPage'));
const AdminReportsPage = lazy(
  () => import('@/pages/adminReports/AdminReportsPage'),
);

const RouteLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<RouteLoader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<RouteLoader />}>
            <SignupPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<RouteLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<RouteLoader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<RouteLoader />}>
            <SettingsPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<RouteLoader />}>
            <AdminUsersPage />
          </Suspense>
        ),
      },
      {
        path: 'reports',
        element: (
          <Suspense fallback={<RouteLoader />}>
            <AdminReportsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
