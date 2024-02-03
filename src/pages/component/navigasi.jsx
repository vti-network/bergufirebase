//navigasi.jsx
import '../css/navigasi.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { HiHome , HiUserCircle, HiOutlineDocument,HiBan,HiLogout } from "react-icons/hi";
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//

export default function Navigasi() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const {currentUser, logout, setError } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //       navigate("/");
    //     }
    //   }, [currentUser, navigate]);
    
      async function handleLogout() {
        try {
          setError(null);
          await logout();
          navigate("/login");
        } catch {
          setError("Failed to logout");
        }
      }

    return (
        <nav className="navbar">
            <ul className="nav-list">

                    <a href="/" className="nav-link">
                        <HiHome  className='icon' />
                        <span>Home</span>
                    </a>

                    {currentUser ? (                
                    <li className="nav-item">
                        <a href="/About" className="nav-link">
                            <HiOutlineDocument className='icon' />
                            <span>About</span>
                        </a>
                        <a href="/User" className="nav-link">
                            <HiUserCircle className='icon' />
                            <span>User</span>
                        </a>
                        <Link className="nav-link" onClick={handleLogout}>
                            <HiLogout className='icon' />
                            <span>Logout</span>
                        </Link>
                    </li>
                    ) : (
                    <li className="nav-item">
                        <a href="/About" className="nav-link">
                            <HiOutlineDocument className='icon' />
                            <span>About</span>
                        </a>
                        <Link className="nav-link" onClick={handleOpen}>
                            <HiUserCircle className='icon' />
                            <span>Akun</span>
                        </Link>
                    </li>
                    )}

                
                
            </ul>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <HiBan /> Warning !!!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Lakukan Login dahulu .
                            <br /><br />
                            <div className='space'>
                                <div>
                                    <span>here
                                        <a href="/Login">Login</a>
                                    </span>
                                </div>
                                <div>
                                    <span>here
                                        <a href="/Register">Register</a>
                                    </span>
                                </div>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </nav>
        
    );
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};