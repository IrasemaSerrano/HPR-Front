import cuerpo from '../layouts/Layout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/cuerpo" component={cuerpo} />
      </Routes>
    </BrowserRouter>
  )
}



        //<Route path="/cuerpo" element={<cuerpo />} />