// Dashboard.jsx
import '../App.css';
import React from 'react';
import BasicTable from './component/table'
import Navigasi from './component/navigasi';

export default function Dashboard() {
    return (
        <div>
            <Navigasi/>
            {/* <div className="box">
                LOADING
            </div> */}
            <BasicTable />
        </div>

    );
}
