import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Demo from './Home';
import Contact from './Contact';
import Card from './card/card';
import Product from './card/product';
import Help from './Help';
import About from './About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Help" element={<Help/>} />
         <Route path="/About" element={<About/>} />
          {/* <Route path="/Demo" element={<Home/>} /> */}
         
         

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
