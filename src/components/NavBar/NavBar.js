import React from 'react';
import { Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar(props) {

    const pages = [

      {
        title:'Home',
        url: '/'
      },
      {
        title:'Shop',
        url: '/shop'
      },
      {
        title:'Galeria',
        url:'/galeria'
      },
      {
        title:'Contacto',
        url: '/contact'
      }

    ]

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
            <li>
                        <Button className="custom-btn">
                            <Link to={'/remeras'}>Remeras</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn">
                            <Link to={'/gorras'}>Gorras</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn">
                            <Link to={'/pantalones'}>Pantalones</Link>
                        </Button>     
                    </li>
                {pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className='title-header'>
            <h2>Pernambuco Favourites</h2>
        </div>
      </header>
    )
}

export default NavBar;