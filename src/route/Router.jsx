import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import Login from '../page/Login';
import Signup from '../page/Signup';
import Home from '../page/Home';
import MyArchivePage from '../page/MyArchivePage';
import ProfilePage from '../page/ProfilePage';
import { useAuth } from '../store/useAuth';

const Router = () => {
  const { user, loading } = useAuth();

  console.log('router user', user);

  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/home" replace /> : <Navigate to="/landing" replace />,
    },
    {
      path: '/landing',
      element: user ? <Navigate to="/home" replace /> : <LandingPage />,
    },
    {
      path: '/login',
      element: user ? <Navigate to="/home" replace /> : <Login />,
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/home" replace /> : <Signup />,
    },
    {
      path: '/home',
      element: !user ? <Navigate to="/login" replace /> : <Home />,
    },
    {
      path: '/myarchive',
      element: !user ? <Navigate to="/login" replace /> : <MyArchivePage />,
    },
    {
      path: '/profile',
      element: !user ? <Navigate to="/login" replace /> : <ProfilePage />,
    },
    {
      path: '*',
      element: !user ? <Navigate to="/" replace /> : <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
