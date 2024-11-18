import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import LandingPage from './page/LandingPage';
import Login from './page/Login';
import MyArchivePage from './page/MyArchivePage';
import ProfilePage from './page/ProfilePage';
import Signup from './page/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/myarchive',
    element: <MyArchivePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
