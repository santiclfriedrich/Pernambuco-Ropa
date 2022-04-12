import {useState} from 'react';
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
        url: '/contacto'
      }

    ]

    return(
        <header className="main-header">
          <div className='searchCart-header'>
          <SearchBar></SearchBar>
          <CartWidget />
          </div>
          <Link to={'/'}>
        <div className="logo-header">
        <img src="logopernambuco.png"
        className="img-header"
        />
        </div>
        </Link>
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
      </header>
    )
}

export default NavBar;