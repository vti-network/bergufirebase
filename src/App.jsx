//app.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
//import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
//
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import Dashboard from './pages/dashboard'
// import Navigasi from './pages/component/navigasi';
import UserDashboard from './pages/user/user_dash';
import AdminDashboard from './pages/admin/admin_dash';
import About from './pages/about/about';
import Login from './pages/component/login';
import Register from './pages/component/register';



function App() {
  return (
    <React.Fragment>
    <CssBaseline />
      <Container fixed>
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <AuthProvider>
          <Router>
            {/* <Navigasi/> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/User" element={<UserDashboard />} />
                <Route path="/Admin" element={<AdminDashboard />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </Routes>
          </Router>
        </AuthProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
