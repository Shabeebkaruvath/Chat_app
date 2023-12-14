import React from 'react'
import attach from '../img/attach.png'
import add_image from '../img/add-image.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Here....' />
      <div className="send">
        <img src={attach} alt='attach'/>
        <img src={add_image} alt='add images'/> 
        <button>send</button>
      </div>
    </div>
  )
}

export default Input