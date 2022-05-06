import {useState} from 'react';
import { Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './NavBar.css';


function NavBar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

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
                {pages.map((page) => {
                    return(
                        page.title === 'Productos' ? (
                        <li>
                            <Button 
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                >{page.title}</Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/remeras'}>Remeras</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/musculosas'}>Musculosas</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/jeans'}>Jeans</Link>
                                </MenuItem>
                            </Menu> 
                        </li>
                        ) : (
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                        )
                        
                    )
                })}
            </ul>
        </div>
      </header>
    )
}

export default NavBar;