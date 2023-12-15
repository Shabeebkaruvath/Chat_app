import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

function Register() {
  const [error, setError] = useState(null); // State to manage error messages
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Import and initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const photo = e.target[3].files[0];

    const storageRef = ref(storage, userName);
    const uploadTask = uploadBytesResumable(storageRef, photo);

    try {
      // Create a new user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      // Upload user photo to Firebase Storage
      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          setError(true); // Handle upload errors
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update user profile with username and photo URL
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            try {
              // Update user document in Firestore
              await setDoc(doc(db, 'user', user.uid), {
                displayName: userName,
                email,
                uid: user.uid,
                photoURL: downloadURL,
              });

              // Show success message and reload the page after registration
              window.alert('Registration Completed');
              window.location.reload();
            } catch (docError) {
              console.error('Error updating user document:', docError);
              setError('Error updating user document');
            }
          });
        }
      );
      navigate('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setError(errorMessage); // Handle authentication errors
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="RegisterMain">
      <div className="RegisterSub">
        <h2 className="RegisterLogo">Prometheus</h2>
        <p className="RegisterTitle">Register</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
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
          <input
            type="file"
            placeholder="Select your image"
            name="photo"
          />
          <button className="RegisterButton" type="submit">
            Sign up
          </button>
          {error && <span className="ErrorMessage">{error}</span>}
          <h4>
            Already have an account?{' '}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Register;
