import React from 'react';

const JourneyPay = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    // You could add real payment logic here
    window.location.href = '/ticket';
  };

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        body, html {
          background: #555;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        h1 {
          color: #fff;
          margin-bottom: 20px;
          font-size: 28px;
          text-align: center;
        }
        .payment-container {
          background: #eee;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          width: 350px;
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: scale(0.8);}
          to {opacity: 1; transform: scale(1);}
        }
        .total-price {
          margin-bottom: 20px;
          font-weight: bold;
          color: #333;
          font-size: 20px;
          text-align: center;
        }
        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 10px;
          background: #ccc;
          font-size: 16px;
          transition: 0.3s;
        }
        input:focus {
          background: #ddd;
          outline: none;
        }
        .pay-btn {
          background: #ff5722;
          color: white;
          padding: 15px;
          border: none;
          width: 100%;
          border-radius: 12px;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 10px;
          text-align: center;
        }
        .pay-btn:hover {
          background: #e64a19;
        }
      `}</style>

      <h1>Payment Page - Crafting Journeys</h1>

      <div className="payment-container">
        <div className="total-price">Total Price: ₹1200</div>

        <form onSubmit={handlePayment}>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Name on Card" required />
          <input type="text" placeholder="MM/YY" required />
          <input type="password" placeholder="CVV" required />

          <button type="submit" className="pay-btn">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default JourneyPay;
