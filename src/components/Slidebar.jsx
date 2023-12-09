import React from 'react'
import '../style.scss'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Slidebar() {
  return (
    <div className="slidebar">
      <Navbar />
      <Search/> 
      <Chats/> 
    </div>
  )
}

export default Slidebar
