import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';


//Pages
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import GalleryPage from './pages/Galeria';
import ContactPage from './pages/Contacto';
import DetailPage from './pages/Detail';
import NotFoundPage from './pages/404NotFound';
import CartPage from './pages/Cart';

//context
import {CartContextProvider} from './context/CartContext';


function App() {
 
  return (
    //JSX

    <div className="App">
  
      <BrowserRouter>
      < CartContextProvider>
      <NavBar />   

      <Routes>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/Contacto" element={< ContactPage />}/>
        <Route path="/Galeria" element={< GalleryPage />}/>
        <Route path="/Shop" element={< ShopPage />}/>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      </CartContextProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
