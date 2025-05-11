import React, { useState } from 'react';

const DreamDestinationFinder = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userChoices, setUserChoices] = useState([]);

  const destinations = {
    "Mountain Peaks & Trails 🏞": "Switzerland 🏔",
    "Sun, Sand & Waves 🌊": "Maldives 🏝",
    "Cities & Culture 🏙": "Paris, France 🏰",
    "Chillin' in the Sun 🌞": "Hawaii 🌴",
    "Winter Wonderland ❄": "Norway 🌨",
    "Tropical Paradise 🌴": "Bali 🌺",
    "Exploring Ancient Ruins 🏺": "Greece 🇬🇷",
    "Partying on the Beach 🌴🍹": "Ibiza 🏖",
    "Wildlife Safaris 🦁": "South Africa 🌍",
    "On a shoestring budget 💸": "Vietnam 🇻🇳",
    "Comfortable but not too expensive 💼": "Spain 🇪🇸",
    "No limit, go big or go home 💰✨": "Dubai 🇦🇪",
    "A solo adventure 🧳": "New Zealand 🇳🇿",
    "A group of friends 👯‍♂": "Thailand 🇹🇭",
    "My partner or loved one 💑": "Venice, Italy 🇮🇹",
    "Yes, I need to hike and explore 🌲🗺": "Costa Rica 🌄",
    "Only if it’s with luxury camping 🏕": "Scotland 🏴",
    "Not really, I prefer city life 🏙": "New York City 🗽",
    "I live for the night! 🌙🌃": "Las Vegas 🎰",
    "I love the calm of the morning 🌅☕": "Japan 🇯🇵",
    "A bit of both! 🌓": "Australia 🇦🇺",
    "Take it slow, I want to soak it all in 🐢": "Italy 🇮🇹",
    "I want to do as much as possible! 🚀": "United Kingdom 🇬🇧",
    "I like a balance, not too fast, not too slow ⏳": "Portugal 🇵🇹",
    "Sunny and Warm ☀": "Brazil 🇧🇷",
    "Cool and Breezy 🍃": "Iceland 🇮🇸",
    "Chilly and Snowy ❄": "Finland 🇫🇮"
  };

  const questions = [
    { question: "What kind of adventure are you craving?", options: ["Mountain Peaks & Trails 🏞", "Sun, Sand & Waves 🌊", "Cities & Culture 🏙"] },
    { question: "What vibe are you feeling for your vacation?", options: ["Chillin' in the Sun 🌞", "Winter Wonderland ❄", "Tropical Paradise 🌴"] },
    { question: "What’s your dream experience?", options: ["Exploring Ancient Ruins 🏺", "Partying on the Beach 🌴🍹", "Wildlife Safaris 🦁"] },
    { question: "Which kind of food would you love to try while traveling?", options: ["Street Food from All Over 🌮🍜", "Luxurious Gourmet Dining 🍽🍷", "Farm-to-Table Freshness 🥗🌾"] },
    { question: "What’s your budget for the trip?", options: ["On a shoestring budget 💸", "Comfortable but not too expensive 💼", "No limit, go big or go home 💰✨"] },
    { question: "What’s your ideal traveling companion?", options: ["A solo adventure 🧳", "A group of friends 👯‍♂", "My partner or loved one 💑"] },
    { question: "Do you love being surrounded by nature?", options: ["Yes, I need to hike and explore 🌲🗺", "Only if it’s with luxury camping 🏕", "Not really, I prefer city life 🏙"] },
    { question: "Are you a night owl or a morning bird?", options: ["I live for the night! 🌙🌃", "I love the calm of the morning 🌅☕", "A bit of both! 🌓"] },
    { question: "What’s your preferred travel pace?", options: ["Take it slow, I want to soak it all in 🐢", "I want to do as much as possible! 🚀", "I like a balance, not too fast, not too slow ⏳"] },
    { question: "Which type of climate do you enjoy the most?", options: ["Sunny and Warm ☀", "Cool and Breezy 🍃", "Chilly and Snowy ❄"] }
  ];

  const handleChoice = (choice) => {
    const updatedChoices = [...userChoices, choice];
    setUserChoices(updatedChoices);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html { height: 100%; font-family: 'Poppins', sans-serif; color: white; overflow: hidden; }
        .navbar {
          position: absolute; top: 0; width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 50px; background: rgba(0,0,0,0.5);
        }
        .navbar a {
          color: white; text-decoration: none; font-weight: bold;
          margin-left: 20px; transition: color 0.3s;
        }
        .navbar a:hover { color: #ff416c; }
        .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                      url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
          height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; animation: fadeIn 2s ease-in;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .hero h1 {
          font-size: 3rem;
          animation: slideDown 2s ease forwards;
        }
        .hero p {
          font-size: 1.5rem;
          margin-top: 1rem;
          animation: slideUp 2s ease forwards;
        }
        @keyframes slideDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .questions-container {
          margin-top: 3rem;
          padding: 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          text-align: center;
        }
        .question { margin-bottom: 20px; font-size: 1.5rem; }
        .options {
          display: flex; justify-content: center; gap: 20px; margin-top: 20px;
          flex-wrap: wrap;
        }
        .options button {
          padding: 15px 30px;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .options button:hover {
          background: #ff416c;
        }
      `}</style>

      <div className="navbar">
        <div>Crafting Journeys</div>
        <div>
          <a href="/home">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <section className="hero">
        <h1>Crafting Journeys ✈</h1>
        <p>Find Your Dream Destination</p>

        <div className="questions-container">
          {currentQuestion <= questions.length ? (
            <>
              <div className="question">{questions[currentQuestion - 1].question}</div>
              <div className="options">
                {questions[currentQuestion - 1].options.map((option, index) => (
                  <button key={index} onClick={() => handleChoice(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              Thank you for completing the quiz! Your dream destination is:{" "}
              <strong>{destinations[userChoices[userChoices.length - 1]] || "somewhere amazing!"}</strong>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DreamDestinationFinder;
