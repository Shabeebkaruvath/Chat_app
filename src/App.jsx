import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
