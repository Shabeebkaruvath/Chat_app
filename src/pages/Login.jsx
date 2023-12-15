import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Import and initialize useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // If login is successful, redirect to home page
      if (userCredential) {
        navigate('/'); // Redirect to home page or any other route
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className='RegisterMain'>
      <div className='RegisterSub'>
        <center><h2 className='RegisterLogo'>Prometheus</h2></center>
        <center><p className='RegisterTitle'>Login</p></center>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' name='email' />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
            />
            {/* Button to toggle password visibility */}
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <button className='RegisterButton' type='submit'>Login</button>
          {error && <span className='ErrorMessage'>{error}</span>}
          <h>Don't have an account? <Link to="/register"><span>Sign Up</span></Link></h>
        </form>
      </div>
    </div>
  );
}

export default Login;
