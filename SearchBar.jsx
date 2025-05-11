import { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState({ buses: [], trains: [], flights: [] });
  
  // Function to fetch transport data
  const fetchTransportData = async () => {
    if (location) {
      const { latitude, longitude } = location;
      try {
        const busResponse = await fetch(`http://localhost:8080/api/bus/search?sourceLat=${latitude}&sourceLon=${longitude}`);
        const busData = await busResponse.json();

        const trainResponse = await fetch(`http://localhost:8080/api/train/search?sourceLat=${latitude}&sourceLon=${longitude}`);
        const trainData = await trainResponse.json();

        const flightResponse = await fetch(`http://localhost:8080/api/flight/search?sourceLat=${latitude}&sourceLon=${longitude}`);
        const flightData = await flightResponse.json();

        setResults({
          buses: busData,
          trains: trainData,
          flights: flightData,
        });
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    }
  };

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchTransportData();
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Location access denied!');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Where to next?"
        onChange={(e) => setLocation(e.target.value)} // Here you can also change it to any place input
      />
      <button onClick={getUserLocation}>Get Location</button>
      
      {/* Results display */}
      <div>
        <h3>Buses</h3>
        {results.buses.map((bus) => (
          <div key={bus.id}>
            <p>{bus.busName} - {bus.departureTime}</p>
          </div>
        ))}
        <h3>Trains</h3>
        {results.trains.map((train) => (
          <div key={train.id}>
            <p>{train.trainName} - {train.departureTime}</p>
          </div>
        ))}
        <h3>Flights</h3>
        {results.flights.map((flight) => (
          <div key={flight.id}>
            <p>{flight.flightName} - {flight.departureTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
