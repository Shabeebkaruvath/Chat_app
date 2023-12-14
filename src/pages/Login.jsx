import React from 'react'

function Login() {
  return (
    <div className='RegisterMain'>
        <div className='RegisterSub'>
            <h2 className='RegisterLogo'>Edn Chat</h2>
            <p className='RegisterTitle'>Login</p>
            <form>
                 
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                 
                <button className='RegisterButton'>Login</button>
                <h>you don't have account <span>Sign Up</span></h>
            </form>
        </div>
     </div>
  )
}

export default Login;