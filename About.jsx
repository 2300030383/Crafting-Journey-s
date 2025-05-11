import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="overlay">
        <div className="content">
          <h1>About Crafting Journeys</h1>
          <p>
            Welcome to <strong>Crafting Journeys</strong> — your all-in-one travel assistant! 
            Our focus is purely on **vehicle bookings**—buses, trains, and flights—with zero clutter. All your happy bookings begins from our Crafing Journey's
            We've packed in three smart features that truly enhance how you plan and remember your trips.
          </p>

          <h2>🚀 Key Features</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Dream Destination Finder</h3>
              <p>Answer a quick quiz to discover your perfect travel destination based on your mood and preferences.</p>
            </div>
            <div className="feature-card">
              <h3>Local Activities Finder</h3>
              <p>Explore exciting cultural, adventurous, and fun activities around your chosen travel location.</p>
            </div>
            <div className="feature-card">
              <h3>Travel Journal</h3>
              <p>Write and preserve your travel memories, photos, and experiences all in one place.</p>
            </div>
          </div>

          <h2>👥 Meet Our Team</h2>
          <div className="team">
            <div className="member">
              <div className="photo-frame">
                <img src="/shannu.jpg" alt="Shanmukha Priya" />
              </div>
              <h4>Shanmukha Priya</h4>
              <p>Frontend & React Lead</p>
            </div>
            <div className="member">
              <div className="photo-frame">
                <img src="/Akshaya.jpg" alt="Akshaya" />
              </div>
              <h4>Akshaya</h4>
              <p>Backend Designer & Planner</p>
            </div>
            <div className="member">
              <div className="photo-frame">
                <img src="/neeharika.jpg" alt="Neeharika" />
              </div>
              <h4>Neeharika</h4>
              <p>Backend & Logic Developer</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-page {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(-45deg, #f8cdda, #1fa2ff, #a6ffcb, #1d2b64);
          background-size: 400% 400%;
          animation: animateBg 18s ease infinite;
          display: flex;
          justify-content: center;
          color: white;
          font-family: 'Segoe UI', sans-serif;
          padding-top: 40px;
          padding-bottom: 40px;
        }

        @keyframes animateBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .overlay {
          background: rgba(0, 0, 0, 0.65);
          width: 95%;
          max-width: 1200px;
          padding: 30px 25px;
          border-radius: 16px;
        }

        .content h1 {
          font-size: 2.8rem;
          margin-bottom: 15px;
        }

        .content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .features {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 40px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.12);
          padding: 20px;
          border-radius: 14px;
          width: 280px;
          transition: transform 0.3s;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.2);
        }

        .team {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .member {
          text-align: center;
        }

        .photo-frame {
          width: 200px;
          height: 270px;
          border: 5px solid white;
          box-shadow: 0 4px 20px rgba(255,255,255,0.3);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member h4 {
          margin: 5px 0;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .features, .team {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
