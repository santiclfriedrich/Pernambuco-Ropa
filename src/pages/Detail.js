import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../utils/ProductsMock'
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        
        <Container className='general-container'>
            <div className='product'>
            <img src={`../${product.image}`} alt=""  />
            <div className='container-product'>
                <h2>{product.title}</h2>
                <p>$ {product.price} ARS</p>
                <p>Talle: {product.size}</p>
                <p>Stock: {product.stock}</p>
                < ItemCount stock={product.stock}/>
                <button>Agregar al carrito</button>
                <button>< Link to={`/cart`}>Comprar</Link></button>
                <p>{product.message}</p>
                <p>Hecho en Argentina x Pernambuco</p>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage