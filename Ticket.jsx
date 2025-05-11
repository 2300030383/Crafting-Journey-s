import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Ticket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [finalPrice, setFinalPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    const {
      basePrice = 1200,
      ticketType = 'Bus',
      name = 'Jayasri',
      email = 'jayasri@example.com',
      phone = '9876543210'
    } = location.state || {};

    const discount = 0.07 * basePrice;
    const finalAmount = basePrice - discount;

    setTotalPrice(basePrice);
    setFinalPrice(finalAmount);
    setTicketType(ticketType);
    setUserDetails({ name, email, phone });

    setTimeout(() => setLoading(false), 2000);
  }, [location.state]);

  return (
    <div style={styles.container}>
      <h1>{ticketType} Ticket Booked - Crafting Journeys</h1>

      <div style={styles.ticketContainer}>
        {/* Customer Details */}
        <div style={styles.customerDetails}>
          <p><span style={styles.bold}>Name:</span> {userDetails.name}</p>
          <p><span style={styles.bold}>Email:</span> {userDetails.email}</p>
          <p><span style={styles.bold}>Phone:</span> {userDetails.phone}</p>
        </div>

        {/* Thank You Message */}
        <div style={styles.thankYouMessage}>
          <p>Thank you for booking with us!</p>
        </div>

        {/* Logo Section */}
        <div style={styles.logo}>
          <img 
            src="/public/cj.jpg.png" 
            alt="Crafting Journeys Logo" 
            style={{ width: '190px', height: 'auto' }} 
          />
        </div>

        {/* Ticket Info */}
        <div style={styles.ticketInfo}>
          <p><span style={styles.bold}>Ticket Type:</span> {ticketType}</p>
          <p><span style={styles.bold}>Departure:</span> 08:00 AM</p>
          <p><span style={styles.bold}>Arrival:</span> 05:00 PM</p>
          <p><span style={styles.bold}>Price per Seat:</span> ₹{totalPrice}</p>
          <p style={styles.discount}>Discount (7%): ₹{(0.07 * totalPrice).toFixed(2)}</p>
          <p style={styles.price}>Total Price: ₹{finalPrice.toFixed(2)}</p>
        </div>

        {/* Slogan */}
        <div style={styles.slogan}>
          <p>“Your Journey Begins Here!”</p>
        </div>

        {loading ? (
          <div style={styles.loading}>Processing your booking...</div>
        ) : (
          <button
            style={styles.backBtn}
            onClick={() => window.location.href = '/home'}
          >
            Back to home
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
  },
  ticketContainer: {
    background: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  ticketInfo: {
    marginBottom: '20px',
    color: '#555',
    opacity: '0',
    animation: 'showDetails 1s ease-in-out forwards',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: '18px',
    color: '#ff5722',
    fontWeight: 'bold',
  },
  discount: {
    fontSize: '16px',
    color: '#ff5722',
    textDecoration: 'line-through',
  },
  customerDetails: {
    marginBottom: '20px',
    fontSize: '16px',
    color: '#333',
  },
  thankYouMessage: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: '10px',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  },
  slogan: {
    fontSize: '18px',
    color: '#1dd1a1',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  backBtn: {
    background: '#ff5722',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
    marginTop: '20px',
  },
  loading: {
    fontSize: '18px',
    color: '#555',
    marginTop: '20px',
    opacity: '0',
    animation: 'loading 2s ease-in-out infinite',
  },
};

export default Ticket;
