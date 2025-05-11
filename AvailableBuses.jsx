import React from 'react';
import { useNavigate } from 'react-router-dom';

const AvailableBuses = () => {
  const navigate = useNavigate();

  const handleBookNow = (destination) => {
    navigate(destination);
  };

  return (
    <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <h1 style={{ fontSize: '3rem', marginTop: '30px', animation: 'fadeIn 1.5s ease' }}>Available Buses 🚌</h1>
      
      <div className="bus-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px', gap: '20px' }}>
        <div className="bus-card" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '20px', width: '280px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', animation: 'fadeInCard 0.5s ease-in-out' }}>
          <h2>Orange Travels</h2>
          <p>Departure: 08:00 AM</p>
          <p>Arrival: 05:00 PM</p>
          <p>Price: ₹1200</p>
          <button style={{ padding: '10px 20px', background: '#ff4b2b', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s' }} onClick={() => handleBookNow('/JourneyPay')}>Book Now</button>
        </div>

        <div className="bus-card" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '20px', width: '280px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', animation: 'fadeInCard 0.5s ease-in-out' }}>
          <h2>Morning Star</h2>
          <p>Departure: 10:00 AM</p>
          <p>Arrival: 06:00 PM</p>
          <p>Price: ₹950</p>
          <button style={{ padding: '10px 20px', background: '#ff4b2b', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s' }} onClick={() => handleBookNow('/JourneyPay')}>Book Now</button>
        </div>

        <div className="bus-card" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '20px', width: '280px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', animation: 'fadeInCard 0.5s ease-in-out' }}>
          <h2>VRL Travels</h2>
          <p>Departure: 02:00 PM</p>
          <p>Arrival: 10:00 PM</p>
          <p>Price: ₹1100</p>
          <button style={{ padding: '10px 20px', background: '#ff4b2b', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s' }} onClick={() => handleBookNow('/JourneyPay')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableBuses;
