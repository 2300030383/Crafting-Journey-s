// src/components/Bus.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Bus = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const searchBuses = async () => {
    if (source && destination) {
      try {
        const response = await axios.get(`http://localhost:8080/api/bus/search?source=${source}&destination=${destination}`, {
          params: { source, destination }
        });
        navigate("/availableBuses", { state: { buses: response.data } });
      } catch (error) {
        console.error("Error fetching buses:", error);
        alert("No buses found or server error.");
      }
    } else {
      alert("Please enter both Source and Destination!");
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1950&q=80") no-repeat center center/cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
      <div className="booking-container" style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
        textAlign: 'center',
        animation: 'popIn 1.5s ease'
      }}>
        <h2 style={{
          marginBottom: '20px',
          fontSize: '2rem',
          color: '#ffda79'
        }}>Book Your Bus 🚍</h2>

        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Enter Source"
          style={{
            width: '250px',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            background: 'rgba(255,255,255,0.3)',
            color: 'white'
          }}
        />
        <br />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter Destination"
          style={{
            width: '250px',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            background: 'rgba(255,255,255,0.3)',
            color: 'white'
          }}
        />
        <br />
        <button
          onClick={searchBuses}
          style={{
            width: '270px',
            padding: '15px',
            marginTop: '20px',
            background: '#ff416c',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
        >
          Search Buses
        </button>
      </div>
    </div>
  );
};

export default Bus;
