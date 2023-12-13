import React from 'react'
import '../style.scss'
import more from '../img/more.png'
import add from '../img/add.png'
import camera from '../img/camera.png'
import user from '../img/user.png'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatUser">
          <img src={user} alt="" />
          <span>shabeeb</span>
        </div>
        <div className="chatIcons">
          <img src={camera} alt="camera" />
          <img src={add} alt="add" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
