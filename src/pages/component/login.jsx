// Login.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HiHome } from "react-icons/hi";
import '../css/form.css';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { currentUser, login } = useAuth();
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/User");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
   //   setLoading(true);
      await login(email, password);
      navigate("/User");
    } catch (e) {
      alert("Failed to login");
    }
  
    //setLoading(false);
  }

  return (
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className='space'>
            <a href="/" className="nav-link">
                <HiHome />
                <span>Home</span>
            </a>
          </div>

          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleFormSubmit}>
          <label htmlFor="email-address">Email:</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="current-email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <br /><br />
          <div className='space'>
            <div>
              <span>Already have an account?
                <a href="/register">register</a>
              </span>
            </div>
          </div>
        </form>
          </Typography>

        </Box>

  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};