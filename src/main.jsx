import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Demo from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
// import Card from './card';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/card" element={<Card/>}/>  */}

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
