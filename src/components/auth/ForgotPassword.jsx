import React, { useState } from "react";
import axios from "../../axiosInstance"; // Import axiosInstance
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request using axiosInstance
      const res = await axios.post("/api/v2/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div title={"Forgot Password - Ecommerce APP"}>
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
            RESET PASSWORD
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
              color: "black",
            }}
          />
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter Your Favorite Sport Name"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              color: "black",
            }}
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter Your New Password"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              color: "black",
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
            RESET
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
