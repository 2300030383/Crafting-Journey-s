import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const response = await fetch("http://localhost:8080/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
    });

    const data = await response.json();

    if (data.success) {
      alert("Registration successful!");

      // Simulating an email check and redirecting to JourneyPay
      // Check if user is already registered and then redirect to JourneyPay
      if (data.userExists) {  // This is a mock condition. Replace it with actual email check
        alert("This email is already registered, redirecting to JourneyPay...");
        // Pass the train information as state
        navigate("/JourneyPay", { state: { email: email, name: fullName } });
      } else {
        navigate("/login");
      }

    } else {
      setError(data.message || "Registration failed.");
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleRegister} style={styles.formCard}>
        <h2 style={styles.heading}>Create Account</h2>
        {error && <div style={styles.error}>{error}</div>}
        <input type="text" name="fullName" placeholder="Full Name" required style={styles.input} />
        <input type="email" name="email" placeholder="Email" required style={styles.input} />
        <input type="password" name="password" placeholder="Password" required style={styles.input} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "400px"
  },
  heading: {
    marginBottom: "10px",
    textAlign: "center",
    color: "#243b55",
    fontWeight: "bold"
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#243b55",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s"
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  }
};

export default Registration;
