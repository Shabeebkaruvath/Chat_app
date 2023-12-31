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
      const errorMessage = error.message;
      const invalidCredentialIndex = errorMessage.indexOf('invalid-credential');
      let specificError = invalidCredentialIndex !== -1 ? errorMessage.slice(invalidCredentialIndex) : errorMessage;
      // Remove the trailing bracket if present
      const bracketIndex = specificError.indexOf(')');
      if (bracketIndex !== -1) {
        specificError = specificError.slice(0, bracketIndex);
      }
  
      setError(specificError);
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
          <h4>Don't have an account? <Link to="/register"><span>Sign Up</span></Link></h4>
        </form>
      </div>
    </div>
  );
}

export default Login;
