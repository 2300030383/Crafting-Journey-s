import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRegister = () => {
    const isNewUser = window.confirm("Are you a new user?");
    if (isNewUser) {
      navigate("/Registration");
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Poppins, sans-serif',
      width: '100vw',
      minHeight: '100vh',
      color: 'white',
      overflowX: 'hidden',
    }}>
      <style>{`
        * {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
        }

        .navbar a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          margin-left: 25px;
        }

        .navbar a:hover {
          color: #ff416c;
        }

        .navbar button {
          color: white;
          font-weight: bold;
          margin-left: 25px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .navbar button:hover {
          color: #ff416c;
        }

        .local-activities {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(255,255,255,0.2);
          padding: 12px 22px;
          border-radius: 20px;
          font-weight: bold;
        }

        .hero {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')
                        no-repeat center center/cover;
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 5vw;
        }

        .hero h1 {
          font-size: 3.5rem;
        }

        .hero p {
          font-size: 1.7rem;
          margin-top: 1rem;
        }

        .search-bar {
          margin-top: 2rem;
          display: flex;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          overflow: hidden;
        }

        .search-bar input {
          padding: 15px;
          border: none;
          outline: none;
          width: 100%;
          max-width: 400px;
          background: transparent;
          color: white;
          font-size: 1rem;
        }

        .search-bar button {
          padding: 15px 25px;
          border: none;
          background: #ff4b2b;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .search-bar button:hover {
          background: #ff416c;
        }

        .options {
          margin-top: 2rem;
          display: flex;
          gap: 2rem;
        }

        .options a {
          padding: 14px 30px;
          background: rgba(255,255,255,0.2);
          border-radius: 30px;
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: background 0.3s;
        }

        .options a:hover {
          background: #ff416c;
        }

        .journal-logo {
          position: fixed;
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
          z-index: 999;
          animation: float 3s ease-in-out infinite;
        }

        .journal-logo img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
          border: 3px solid white;
        }

        .footer {
          background: rgba(0, 0, 0, 0.6);
          padding: 20px;
          color: white;
          text-align: center;
          margin-top: auto;
        }

        .footer-column {
          margin-bottom: 10px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-52%) translateX(-5px); }
        }

        @media screen and (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
          .hero p { font-size: 1.2rem; }
          .search-bar input { max-width: 250px; }
          .options { flex-direction: column; gap: 1rem; }
          .navbar { padding: 15px 5vw; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="navbar">
        <div>
          Crafting Journeys&nbsp;&nbsp;&nbsp;
          <Link to="/DreamDestinationFinder">Dream Destination Finder</Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={handleLoginRegister}>Login/Register</button>
        </div>
      </div>

      <div className="local-activities">
        <Link to="/LocalActivitiesFinder">Local Activities Finder</Link>
      </div>

      <section className="hero">
        <h1>Crafting Journeys ✈</h1>
        <p>Book Buses, Trains & Flights in One Click</p>

        <div className="search-bar">
          <input type="text" placeholder="Where to next?" />
          <button>Search</button>
        </div>

        <div className="options">
          <Link to="/bus">Bus</Link>
          <Link to="/train">Train</Link>
          <Link to="/flights">Flight</Link>
        </div>
      </section>

      <Link to="/Journal" className="journal-logo" title="Open Travel Journal">
        <img src="/journal.jpg" alt="Travel Journal Logo" />
      </Link>

      <footer className="footer">
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@craftingjourneys.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Crafting Journeys. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
