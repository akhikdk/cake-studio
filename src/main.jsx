import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Demo from './Home';
import Contact from './Contact';
import Card from './card/card';
import Product from './card/product';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
