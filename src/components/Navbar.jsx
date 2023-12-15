import React from 'react';
import user from '../img/user.png';
import { auth } from '../firebase'; // Import your Firebase authentication instance
import '../style.scss';

function Navbar() {
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign the user out
      // Redirect or perform any necessary actions after signing out...
    } catch (error) {
      // Handle sign-out errors, if any
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="navbar">
      <span className="logo">Prometheus</span>
      <div className="user">
        <img src={user} alt="user-profile" />
        <p className="user_name">
          <button onClick={handleSignOut}>Sign Out</button>
        </p>
      </div>
    </div>
  );
}

export default Navbar;

