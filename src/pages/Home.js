import Container from '@mui/material/Container';
import ListProducts from '../components/ListProducts/ListProducts';

const HomePage = () => {
    return(
        <Container className='container-general'> 

        <div className='title-header'>
          <h2>Pernambuco Favourites</h2>
        </div>

        <ListProducts />
        
      </Container>
    )
}

export default HomePage;