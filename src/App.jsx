import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from './components/Header';
import { Home } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<h1>DashBoard</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;