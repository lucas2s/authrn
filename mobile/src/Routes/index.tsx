import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../Contexts/auth';

import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;