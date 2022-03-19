import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='Pernambuco Favourites'>
        
      </ItemListContainer>
      <ItemListContainer title='SALE'>

      </ItemListContainer>
    </div>
  );
}

export default App;
