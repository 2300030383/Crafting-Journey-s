import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Flight = () => {
  const navigate = useNavigate();
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [flightClass, setFlightClass] = useState('');

  const handleBooking = () => {
    if (!arrival || !departure || !travelDate || !flightClass) {
      alert('Please fill in all the fields.');
      return;
    }
    navigate('/AvailableFlights');
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: url('public/flight.jpg') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            color: #fff;
            overflow: hidden;
          }

          h1 {
            font-size: 36px;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
            margin-bottom: 20px;
          }

          .flight-booking-container {
            background: rgba(0, 0, 0, 0.6);
            padding: 30px;
            border-radius: 20px;
            width: 400px;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
            position: relative;
            z-index: 2;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 10px;
            background: #fff;
            font-size: 16px;
            color: #333;
            transition: 0.3s;
          }

          .form-group input:focus, .form-group select:focus {
            background: #d0f0f5;
            outline: none;
          }

          .book-btn {
            background: #00796b;
            color: white;
            padding: 15px;
            border: none;
            width: 100%;
            border-radius: 12px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s;
            margin-top: 10px;
            text-align: center;
          }

          .book-btn:hover {
            background: #004d40;
          }

          .flight-info {
            margin-top: 20px;
            font-size: 18px;
          }

          .flight-info p {
            font-weight: bold;
          }
        `}
      </style>

      <h1>Book your flight✈</h1>

      <div className="flight-booking-container">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>

        <button className="book-btn" onClick={handleBooking}>
          Book Flight
        </button>

        <div className="flight-info" id="flightInfo" style={{ display: 'none' }}>
          <p>Departure: <span id="departureDetails"></span></p>
          <p>Arrival: <span id="arrivalDetails"></span></p>
          <p>Class: <span id="classDetails"></span></p>
          <p>Travel Date: <span id="dateDetails"></span></p>
        </div>
      </div>
    </div>
  );
};

export default Flight;
