import React from 'react';
import { Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

function NavBar() {
    return(
        <header className="main-header">
          <div className='searchCart-header'>
          <SearchBar></SearchBar>
          <CartWidget />
          </div>
        <div className="logo-header">
        <img src="logopernambuco.png"
        className="img-header"
        />
        </div>
        <div className="menu-header">
            <ul className='navbar'>
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Galeria</a></li>
              <li><a>Contacto</a></li>
            </ul>
        </div>
      </header>
    )
}

export default NavBar;