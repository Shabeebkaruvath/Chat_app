import '../style.scss'
import React from 'react'
import Slidebar from '../components/Slidebar'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className="home">
      <div className="homeSub">
        <Slidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home
