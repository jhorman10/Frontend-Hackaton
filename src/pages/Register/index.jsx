import React from 'react';
import './style.css';

function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Registrate!</h1>
        First Name:
        <input type="text" name="firstName" />
        Last Name:
        <input type="text" name="lastName" />
        Email:
        <input type="text" name="email" />
        Password:
        <input type="password" name="password" />
        Confirm Password:
        <input type="password" name="confirmPassword" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
