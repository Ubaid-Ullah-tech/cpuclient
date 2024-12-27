import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ubaid from '../../assets/ubaid.jpg';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // Axios instance for communicating with the server
  const axiosInstance = axios.create({
    baseURL: "https://cpuserver-react-dveloper.vercel.app", // Update the base URL for your deployed server
  });

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/v2/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Something went wrong!");
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "90vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    text: "black",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#007bff",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <img
        src={ubaid}
        alt="Profile"
        style={imageStyle}
      />
      <form onSubmit={handleSubmit} style={formStyle} className="text-black">
        <h4 style={titleStyle}>REGISTER FORM</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          placeholder="Enter Your Name"
          required
          autoFocus
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter Your Password"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          placeholder="Enter Your Phone"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
          placeholder="Enter Your Address"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={inputStyle}
          placeholder="What is Your Favorite Sport?"
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;
