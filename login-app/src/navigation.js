import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'

const Navigation = (props) => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home isLogged={props.isLoggedIn} />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation