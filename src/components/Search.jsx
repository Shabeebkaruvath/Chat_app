import React from 'react'
import user from '../img/user.jpg'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search User...." />
      </div>
      <div className="userChat">
        <img src={user} alt="user_img" />
        <div className="userChat-info">
            <span className='user1'>Edn</span>
            <br />
            <span className='message1'>hello</span>
        </div>
      </div>
    </div>
  )
}

export default Search
