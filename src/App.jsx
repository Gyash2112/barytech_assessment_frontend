import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ParentDashboard from './pages/ParentDashboard/ParentDashboard';
import ChildDashboard from './pages/ChildDashboard/ChildDashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PulicRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />

          <Route
            path="/parent-dashboard"
            element={
              <PrivateRoute role="parent">
                <ParentDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/child-dashboard"
            element={
              <PrivateRoute role="child">
                <ChildDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
