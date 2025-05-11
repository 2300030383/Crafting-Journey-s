import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Here, add your actual login logic (e.g., authentication call)
    // After successful login:
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-box">
        <h2>Login to Crafting Journeys</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .login-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: url('https://assets-global.website-files.com/64f5f1f13debbfe3cc4be5d5/64f5f34bb18c1bbd2b1e5b36_pexels-travel-video.mp4') no-repeat center center/cover;
          background-attachment: fixed;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 0;
        }

        .login-box {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          text-align: center;
          color: white;
          max-width: 400px;
          width: 90%;
        }

        .login-box h2 {
          margin-bottom: 25px;
        }

        .login-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border: none;
          border-radius: 8px;
          outline: none;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 1rem;
        }

        .login-box input::placeholder {
          color: #eee;
        }

        .login-box button {
          width: 100%;
          padding: 12px;
          background: #ff4b2b;
          border: none;
          color: white;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .login-box button:hover {
          background: #ff416c;
        }
      `}</style>
    </div>
  );
};

export default Login;
