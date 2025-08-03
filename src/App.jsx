import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';

const App = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('intern-token');
  };

  // Public route wrapper
  const PublicRoute = ({ children }) => {
    const location = useLocation();
    
    if (isAuthenticated()) {
      // If logged in and trying to access auth pages, redirect to dashboard
      return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
    return children;
  };

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    
    if (!isAuthenticated()) {
      // If not logged in, redirect to login with return location
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />

        {/* Protected routes */}
        <Route element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>

        {/* Root path redirect */}
        <Route path="/" element={
          <Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />
        } />

        {/* Catch-all route */}
        <Route path="*" element={
          <Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />
        } />
      </Routes>
    </Router>
  );
};

export default App;