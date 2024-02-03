// Table.jsx
import React, { useState, useEffect } from 'react';
import '../css/table.css';

const Table = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bergu-p2p-default-rtdb.asia-southeast1.firebasedatabase.app/bergu.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderTableRows = () => {
    return Object.keys(data).map((key) => (
      <tr key={key}>
        <td>{data[key].date_time}</td>
        <td>{data[key].jumlah}</td>
        <td>{data[key].opt}</td>
        <td>{data[key].penerima}</td>
        <td>{data[key].pengirim}</td>
        <td>{data[key].txhash}</td>
      </tr>
    ));
  };

  const ukuranponsel = () => {
    return Object.keys(data).map((key) => (
      <tr key={key}>
        <td>Date/Time :{data[key].date_time}</td>
        <td>Jumlah    :{data[key].jumlah}</td>
        <td>opt       :{data[key].opt}</td>
        <td>penerima  :{data[key].penerima}</td>
        <td>pengirim  :{data[key].pengirim}</td>
        <td>txhash    :{data[key].txhash}</td>
      </tr>
    ));
  };

  const isMobile = window.innerWidth <= 400;

  return (
    <div className='dashboard-content'>
      <div>
        <h2 style={{color:'white'}}>Transaksi History</h2>
        <table>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Jumlah</th>
              <th>Opt</th>
              <th>Penerima</th>
              <th>Pengirim</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>{isMobile ? ukuranponsel() : renderTableRows()}</tbody>
        </table>        
      </div>
    </div>
  );
};

export default Table;
