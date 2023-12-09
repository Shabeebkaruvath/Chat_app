import React from 'react'
import user from '../img/user.png'
import '../style.scss'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Edn Chat</span>
      <div className="user">
        <img src={user} alt="user-profile" />
        <p className="user_name">edn</p>
        <button className="nav-btn">Logout</button>
      </div>
    </div>
  )
}

export default Navbar
