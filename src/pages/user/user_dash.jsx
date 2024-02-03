// UserDashboard.jsx
import '../../App.css';
import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navigasi from '../component/navigasi';

export default function UserDashboard() {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    useEffect(() => {
        if (!currentUser) {
          navigate("/Login");
        }
      }, [currentUser, navigate]);
    return (
        
        <div className="container"><Navigasi/>
            <div className="box">
            UserDashboard
            </div>
        </div>

    );
}
