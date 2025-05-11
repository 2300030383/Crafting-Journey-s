import React from 'react';
import { useNavigate } from 'react-router-dom';

const AvailableFlights = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Redirecting to Payment Page...");
    navigate('/JourneyPay'); // Navigate to the payment page
  };

  const flights = [
    {
      airline: 'Air India',
      departure: '10:00 AM',
      arrival: '12:30 PM',
      duration: '2h 30m',
      fare: '₹5,500',
    },
    {
      airline: 'IndiGo Airlines',
      departure: '1:00 PM',
      arrival: '3:20 PM',
      duration: '2h 20m',
      fare: '₹4,800',
    },
    {
      airline: 'Vistara',
      departure: '5:00 PM',
      arrival: '7:10 PM',
      duration: '2h 10m',
      fare: '₹6,200',
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            height: 100vh;
            background: #f0f0f0;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #4b3832;
          }

          /* Flying Planes */
          .plane {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Airplane_silhouette.png') no-repeat center;
            background-size: contain;
            opacity: 0.15;
            animation: flyAcross 30s linear infinite;
          }

          .plane:nth-child(1) { top: 10%; left: -50px; animation-delay: 0s; animation-duration: 30s; }
          .plane:nth-child(2) { top: 30%; left: -100px; animation-delay: 5s; animation-duration: 35s; }
          .plane:nth-child(3) { top: 50%; left: -80px; animation-delay: 10s; animation-duration: 25s; }
          .plane:nth-child(4) { top: 70%; left: -120px; animation-delay: 15s; animation-duration: 40s; }
          .plane:nth-child(5) { top: 20%; left: -70px; animation-delay: 8s; animation-duration: 28s; }

          @keyframes flyAcross {
            0% { transform: translateX(0) rotate(0deg); }
            100% { transform: translateX(120vw) rotate(10deg); }
          }

          h1 {
            font-size: 36px;
            margin-bottom: 30px;
            color: #6d4c41;
            animation: fadeSlideDown 1s ease-out;
            z-index: 1;
          }

          .flight-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 90%;
            max-width: 600px;
            animation: fadeSlideUp 1.5s ease-out;
            z-index: 1;
          }

          .flight {
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            position: relative;
          }

          .flight:hover {
            transform: translateY(-5px);
          }

          .flight strong {
            font-size: 20px;
            color: #5d4037;
          }

          .flight span {
            font-size: 15px;
            color: #616161;
          }

          /* Pay Now Button */
          .pay-now {
            margin-top: 10px;
            align-self: flex-start;
            padding: 8px 16px;
            background-color: #6d4c41;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-size: 14px;
          }

          .pay-now:hover {
            background-color: #8d6e63;
          }

          @keyframes fadeSlideDown {
            0% {opacity: 0; transform: translateY(-20px);}
            100% {opacity: 1; transform: translateY(0);}
          }

          @keyframes fadeSlideUp {
            0% {opacity: 0; transform: translateY(20px);}
            100% {opacity: 1; transform: translateY(0);}
          }
        `}
      </style>

      {/* Flying Planes Background */}
      <div className="plane"></div>
      <div className="plane"></div>
      <div className="plane"></div>
      <div className="plane"></div>
      <div className="plane"></div>

      <h1>Available Flights ✈</h1>

      <div className="flight-list">
        {flights.map((flight, index) => (
          <div key={index} className="flight">
            <strong>{flight.airline}</strong>
            <span>Departure: {flight.departure} | Arrival: {flight.arrival}</span>
            <span>Duration: {flight.duration}</span>
            <span>Fare: {flight.fare}</span>
            <button className="pay-now" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFlights;
