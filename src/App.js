import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Card from './components/Card/Card';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='Pernambuco Favourites'>
      </ItemListContainer>
      <Card>
      </Card>
      
      
    </div>
  );
}

export default App;
