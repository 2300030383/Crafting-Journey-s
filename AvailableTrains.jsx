import React from 'react';
import { useNavigate } from 'react-router-dom';

const AvailableTrains = () => {
  const navigate = useNavigate();

  const handleBook = (trainDetails) => {
    // Navigate to JourneyPay with train details passed as state
    navigate('/JourneyPay', { state: { train: trainDetails } });
  };

  return (
    <div style={styles.body}>
      <div style={styles.trainBackground}></div>

      <h1 style={styles.heading}>Available Trains for Your Journey</h1>

      <div style={styles.trainContainer}>
        <div style={styles.trainCardContainer}>
          <div style={styles.trainCard}>
            <h2 style={styles.trainTitle}>Express Train - 123</h2>
            <p><strong>Departure:</strong> City A - 8:00 AM</p>
            <p><strong>Arrival:</strong> City B - 2:00 PM</p>
            <p><strong>Class:</strong> First Class</p>
            <button
              style={styles.bookButton}
              onClick={() =>
                handleBook({
                  name: "Express Train - 123",
                  departure: "City A - 8:00 AM",
                  arrival: "City B - 2:00 PM",
                  classType: "First Class"
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>

        <div style={styles.trainCardContainer}>
          <div style={styles.trainCard}>
            <h2 style={styles.trainTitle}>Superfast Express - 456</h2>
            <p><strong>Departure:</strong> City A - 10:00 AM</p>
            <p><strong>Arrival:</strong> City B - 4:00 PM</p>
            <p><strong>Class:</strong> Second Class</p>
            <button
              style={styles.bookButton}
              onClick={() =>
                handleBook({
                  name: "Superfast Express - 456",
                  departure: "City A - 10:00 AM",
                  arrival: "City B - 4:00 PM",
                  classType: "Second Class"
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>

        <div style={styles.trainCardContainer}>
          <div style={styles.trainCard}>
            <h2 style={styles.trainTitle}>Luxury Train - 789</h2>
            <p><strong>Departure:</strong> City A - 12:00 PM</p>
            <p><strong>Arrival:</strong> City B - 6:00 PM</p>
            <p><strong>Class:</strong> Sleeper Class</p>
            <button
              style={styles.bookButton}
              onClick={() =>
                handleBook({
                  name: "Luxury Train - 789",
                  departure: "City A - 12:00 PM",
                  arrival: "City B - 6:00 PM",
                  classType: "Sleeper Class"
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Poppins', sans-serif",
    overflow: 'hidden',
    backgroundColor: '#f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative'
  },
  trainBackground: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1
    // Note: Background animation not implemented via inline styles
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
  },
  trainContainer: {
    width: '80%',
    maxWidth: '1200px',
    margin: '50px auto',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  trainCardContainer: {
    width: '30%',
    margin: '10px 0',
    minWidth: '300px'
  },
  trainCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
  },
  trainTitle: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  bookButton: {
    backgroundColor: '#ff5722',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '16px'
  }
};

export default AvailableTrains;
