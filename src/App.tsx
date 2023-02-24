import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import NewsPage from 'pages/NewsPage';
import ProfilePage from 'pages/ProfilePage';
import NonExistentPage from 'pages/NonExistentPage';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';
import PrivateRoute from 'components/privateRoutes/PrivateRoute';
import LoginForm from 'components/forms/loginForm/LoginForm';
import PublicRoute from 'components/publicRoutes/PublicRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="news" element={<NewsPage />} />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path="auth" element={<AuthLayout />}>
      <Route
        path="signin"
        element={
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        }
      />
    </Route>

    <Route path="*" element={<NonExistentPage />} />
  </Routes>
);

export default App;
