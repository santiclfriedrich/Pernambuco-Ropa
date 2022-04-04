import Container from '@mui/material/Container';
import ListProducts from '../components/ListProducts/ListProducts';

const ShopPage = () => {
    return(
        <Container className='container-general'> 
        <h1>Shop</h1>
        <ListProducts />
      </Container>
    )
}

export default ShopPage;