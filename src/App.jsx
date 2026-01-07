import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summerset1 from './pages/summerset1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Summerset1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;