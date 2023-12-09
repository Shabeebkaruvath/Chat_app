 import React from 'react'
 
 function Register() {
   return (
     <div className='RegisterMain'>
        <div className='RegisterSub'>
            <h2 className='RegisterLogo'>Edn Chat</h2>
            <p className='RegisterTitle'>Register</p>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <input type="file" />
                <button className='RegisterButton'>sign up</button>
                <h>you already have account <span>Log in</span></h>
            </form>
        </div>
     </div>
   )
 }
 export default Register;