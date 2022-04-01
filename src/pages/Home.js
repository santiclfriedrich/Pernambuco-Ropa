import Container from '@mui/material/Container';
import ListProducts from '../components/ListProducts/ListProducts';




const HomePage = () => {
    return(
        <Container className='container-general'> 
        <ListProducts />
        
      </Container>
    )
}

export default HomePage;