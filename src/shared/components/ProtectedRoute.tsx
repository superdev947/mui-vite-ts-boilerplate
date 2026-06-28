import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/shared/context';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRoles,
}) => {
  const { isAuthenticated, user } = useAuth();

  // Redirect to login if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If requiredRoles is specified, check if user has at least one of the required roles
  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = user?.roles.some((role) =>
      requiredRoles.includes(role),
    );

    console.log(hasRequiredRole, user);

    if (!hasRequiredRole) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};
