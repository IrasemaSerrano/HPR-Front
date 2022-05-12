import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import About from "../pages/client/About";
import Galery from "../pages/client/Galery";
import Recerve from "../pages/client/Recerve";
import Rooms from "../pages/client/Rooms";
import Home from "../pages/client/Home";
import Menu from '../layouts/header/Menu';

function ClientRoutes() {
  return (
    <BrowserRouter>
          <Menu/>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/galery" element={<Galery/>}/>
              <Route path="/recerve" element={<Recerve/>}/>
              <Route path="/rooms" element={<Rooms/>}/>
              <Route path="/" element={<Home/>}/> 
          </Routes>
      </BrowserRouter>
  )
}

export default ClientRoutes