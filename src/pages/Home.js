import Container from '@mui/material/Container';
import ListProducts from '../components/ListProducts/ListProducts';
import Slider from '../components/Slider/Slider';

const HomePage = () => {


    return(
        <Container className='container-general'> 
        < Slider />
        <div className='title-header'>
          <h2>Pernambuco Favourites</h2>
        </div>
        <ListProducts />
        
      </Container>
    )
}

export default HomePage;