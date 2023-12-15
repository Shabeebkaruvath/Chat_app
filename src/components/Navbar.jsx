import React, { useContext } from 'react';
import '../style.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {AuthContext} from "../context/AuthContext"

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Handle sign-out success if needed
      })
      .catch((error) => {
        // Handle sign-out error if needed
        console.error('Sign-out error:', error);
      });
  };

  return (
    <div className="navbar">
      <span className="logo">Prometheus</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user-profile" />
        <p className="user_name">
          <button onClick={handleSignOut}>{currentUser.displayName}</button>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
