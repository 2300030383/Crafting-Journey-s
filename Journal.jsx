import React, { useState } from 'react';

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveAndRedirect = () => {
    alert('Your journal has been saved!');
    setTimeout(() => {
      window.location.href = '/home';
    }, 1000);
  };

  return (
    <div>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('public/journalbg.jpg') no-repeat center center/cover;
          background-size: cover;
          animation: moveBackground 20s linear infinite alternate;
          z-index: -1;
        }

        @keyframes moveBackground {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .container {
          position: relative;
          z-index: 1;
          padding: 50px 20px;
          text-align: center;
          color: white;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: red;
        }

        .writing-space {
          width: 80%;
          height: 300px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 15px;
          color: white;
          padding: 20px;
          font-size: 1rem;
          resize: none;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
          margin-top: 30px;
        }

        .image-preview {
          max-width: 80%;
          margin-top: 20px;
          border-radius: 10px;
        }

        .upload-btn, .file-label, button {
          margin-top: 20px;
          padding: 12px 30px;
          font-weight: bold;
          background: #ff416c;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .upload-btn:hover, .file-label:hover, button:hover {
          background: #ff4b2b;
        }

        .file-input {
          display: none;
        }

        .image-container {
          text-align: center;
        }
      `}</style>

      <div className="animated-bg"></div>

      <div className="container">
        <h1>Your Travel Journal 📓</h1>
        <p>Write your adventure here!</p>

        <textarea
          className="writing-space"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Type your travel memories here..."
        ></textarea><br />

        <label htmlFor="imageUpload" className="file-label">Attach Image</label>
        <input
          type="file"
          id="imageUpload"
          className="file-input"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="image-container">
          {imageSrc && <img src={imageSrc} className="image-preview" alt="Journal Preview" />}
        </div>

        <button onClick={saveAndRedirect}>Save</button>
      </div>
    </div>
  );
};

export default Journal;
