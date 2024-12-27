import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import ubaid from '../../assets/ubaid.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://cpuserver-react-dveloper.vercel.app/api/v2/auth/login", { email, password });

      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data)); // Store token and user info
        navigate(location.state || "/"); // Redirect user to previous location or homepage
      } else {
        toast.error(res.data.message); // Display error message from the response
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        backgroundColor: "#f7f7f7",
        padding: "1rem",
      }}
    >
      <img
        src={ubaid}
        alt="User"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          LOGIN FORM
        </h4>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "5px",
            border: "1px solid #ddd",
            color: "black", // Set text color to black
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "5px",
            border: "1px solid #ddd",
            color: "black", // Set text color to black
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
