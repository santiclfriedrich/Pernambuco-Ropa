import './App.css';
import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import ListProducts from './components/ListProducts/ListProducts';
import Container from '@mui/material/Container';
import DetailProductsCont from './components/DetailProductsCont/DetailProductsCont';

function App() {
  const [open, setOpen] = useState(false);

function App() {
    setOpen(true)
  }




  return (
    //JSX

    <div className="App">
     <NavBar />
      <Container className='container-general'> 
        <ListProducts />
        < DetailProductsCont />
      </Container>
    </div>
  );
}

export default App;
