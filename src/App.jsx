import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summerset1 from './pages/summerset1';
import Summerset2 from './pages/summerset2';
import Summerset3 from './pages/summerset3';
import Amantirender from './pages/render';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Summerset1 />} />
        <Route path="/page2" element={<Summerset2 />} />
        <Route path="/page3" element={<Summerset3 />} />
        <Route path="/page4" element={<Amantirender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;