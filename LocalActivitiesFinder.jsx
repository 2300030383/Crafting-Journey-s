import React, { useState } from 'react';

const LocalActivitiesFinder = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null); // To capture and display error messages

  const findPlaces = () => {
    if (!navigator.geolocation) {
      alert('Your browser does not support Geolocation.');
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const radius = 10000;

      const url = `https://en.wikipedia.org/w/api.php?` +
        `action=query&format=json&origin=*&` +
        `list=geosearch&gscoord=${lat}|${lon}&gsradius=${radius}&gslimit=10`;

      try {
        const res = await fetch(url);
        if (!res.ok) { // Check if response is ok (status 200-299)
          throw new Error('Failed to fetch places.');
        }
        const data = await res.json();
        setPlaces(data.query.geosearch);
        setError(null); // Reset error if data is fetched successfully
      } catch (err) {
        setError(err.message || 'Failed to fetch places.');
        console.error('Error fetching places:', err); // Log error for debugging
      }
    }, () => {
      alert('Could not get your location.');
    });
  };

  return (
    <div style={styles.hero}>
      <h1>Discover Local Fun Places</h1>
      <p>Click the button to find interesting places near you!</p>
      <button onClick={findPlaces} style={styles.button}>Find Activities</button>

      {error && <p style={styles.error}>Error: {error}</p>} {/* Display error if present */}

      <div style={styles.results}>
        {places.length === 0 ? null :
          places.map((place) => (
            <div key={place.pageid} style={styles.card}>
              <h3>{place.title}</h3>
              <p>Distance: {(place.dist / 1000).toFixed(2)} km</p>
              <a href={`https://en.wikipedia.org/?curid=${place.pageid}`} target="_blank" rel="noopener noreferrer" style={styles.link}>Read More</a>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  hero: {
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px',
    animation: 'fadeIn 2s ease-in',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#ff416c',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '20px'
  },
  results: {
    marginTop: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  card: {
    background: '#333',
    padding: '20px',
    borderRadius: '10px',
    width: '250px'
  },
  link: {
    color: '#4dd0e1',
    textDecoration: 'none'
  },
  error: {
    color: 'red',
    marginTop: '10px',
    fontSize: '1rem',
  }
};

export default LocalActivitiesFinder;
