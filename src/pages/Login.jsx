import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import login from "../store/store";
import logo from "../assets/imagebit.png";

export default function Login() {
  const { username, password, email, setUsername, setPassword, setEmail } =
    login();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && password && email) {
      navigate("/dashboard-frontend/maind");
    } else {
      alert("Enter all credentials");
    }
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoimg} />
      </div>

      <div className={styles.welcomeContainer}>
        <h1
          className={`${styles.welcomeText} ${
            showWelcome ? styles.fadeIn : ""
          }`}
        >
          Welcome to Student Dashboard
        </h1>
      </div>

      <div className={styles.loginbody}>
        <div className={styles.border}>
          <div className={styles.container}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
