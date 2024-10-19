import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [status, setStatus] = useState('Token not fetched');

  const fetchToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get-token');
      if (response.data.success) {
        setToken(response.data.token);
        setTimestamp(new Date(response))
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      setStatus('Failed to fetch token');
    }
  };
   
    
  return (
    <div className="App">
      <h1>Finicity Token Status</h1>
      <button onClick={fetchToken}>Fetch Token</button>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Token:</strong> {token}</p>
      <p><strong>Last Fetched:</strong> {timestamp}</p>
    </div>
  );
}

export default App;
