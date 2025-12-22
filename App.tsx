import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pro from './pages/Pro';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ja" element={<Home />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/pro/ja" element={<Pro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
