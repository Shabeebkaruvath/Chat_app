import React from 'react'
import user from '../img/user.jpg'
import user1 from '../img/user.png'

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <img src={user1} alt="" />
        <p>
          Google Fonts makes it easy to bring personality and performance to
          your websites and products. Our robust catalog of open-source fonts
          and icons makes it easy to integrate expressive type and icons
          seamlessly no matter where you are in the world.
        </p>
      </div>
    </div>
  )
}

export default Message
