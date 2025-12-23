import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pro from './pages/Pro';
import Tokushoho from './pages/Tokushoho';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ja" element={<Home />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/pro/ja" element={<Pro />} />
        <Route path="/tokushoho" element={<Tokushoho />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
