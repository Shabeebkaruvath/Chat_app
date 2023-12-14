import React from 'react'
import user from '../img/user.png'

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>
          Google Gemini is a set of large language models (LLMs) developed by
          Google AI. It is a successor to Google's previous LLMs, such as LaMDA
          and BERD .
        </p>
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default Message
