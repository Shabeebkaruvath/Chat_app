import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

function Register() {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      // Show registration success message
      window.alert('Registered!');
      // Refresh the page
      window.location.reload();

    } catch (authError) {
      setError('Registration error: ' + authError.message);
    }
  };

  return (
    <div className="RegisterMain">
      <div className="RegisterSub">
        <center>
          <h2 className="RegisterLogo">Prometheus</h2>
        </center>
        <p className="RegisterTitle">Register</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button className="RegisterButton">Sign up</button>
          {error && <span>{error}</span>}
          <p>
            You already have an account <span>Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
