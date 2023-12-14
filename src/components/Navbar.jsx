import React from 'react'
import user from '../img/user.png'
import '../style.scss'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Prometheus</span>
      <div className="user">
        <img src={user} alt="user-profile" />
        <p className="user_name">edn</p>
         
      </div>
    </div>
  )
}

export default Navbar
