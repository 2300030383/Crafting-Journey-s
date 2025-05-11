import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Train = () => {
  const [arrivalStation, setArrivalStation] = useState('');
  const [departureStation, setDepartureStation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [classType, setClassType] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const navigate = useNavigate();

  const bookTrain = () => {
    if (arrivalStation && departureStation && travelDate && classType) {
      setShowInfo(true);
      setTimeout(() => {
        navigate('/AvailableTrains'); // Route to AvailableTrains.jsx
      }, 1500);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      overflow: 'hidden',
      background: `url('public/trainbg.jpg') no-repeat center center fixed`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <h1 style={{
        color: '#fff',
        fontSize: '36px',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        marginBottom: '20px'
      }}>
        Book Your Train 🚅
      </h1>

      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '30px',
        borderRadius: '20px',
        width: '400px',
        textAlign: 'center',
        animation: 'fadeIn 1.5s ease-in-out',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter Arrival Station"
            value={arrivalStation}
            onChange={(e) => setArrivalStation(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter Departure Station"
            value={departureStation}
            onChange={(e) => setDepartureStation(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select Class</option>
            <option value="First Class">First Class</option>
            <option value="Second Class">Second Class</option>
            <option value="Sleeper Class">Sleeper Class</option>
          </select>
        </div>

        <button
          onClick={bookTrain}
          style={buttonStyle}
        >
          Book Train
        </button>

        {showInfo && (
          <div className="train-info" style={{ marginTop: '20px', fontSize: '18px' }}>
            <p><strong>Departure:</strong> <span>{departureStation}</span></p>
            <p><strong>Arrival:</strong> <span>{arrivalStation}</span></p>
            <p><strong>Class:</strong> <span>{classType}</span></p>
            <p><strong>Travel Date:</strong> <span>{travelDate}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable styles
const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  border: 'none',
  borderRadius: '10px',
  background: '#fff',
  fontSize: '16px',
  color: '#333',
  transition: '0.3s',
};

const buttonStyle = {
  background: '#ff5722',
  color: 'white',
  padding: '15px',
  border: 'none',
  width: '100%',
  borderRadius: '12px',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'background 0.3s',
  marginTop: '10px',
  textAlign: 'center',
};

export default Train;
