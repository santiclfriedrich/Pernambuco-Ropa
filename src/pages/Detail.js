import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../utils/ProductsMock'
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    const [ contador, setContador ] = useState(0)
    
    const { agregarAlCarrito } = useCartContext()

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

    function onAdd(cant){
        setContador(cant)
        agregarAlCarrito( {...product, cantidad: cant} )
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
                <p>{product.message}</p>

                {
                        contador === 0
                        
                        ? 
                        
                            <div className="mt-5 ms-5">
                                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                            </div>
                        
                        : 
                            <div className="mt-5">
                                <Link to='/cart'>
                                    <button className="btn-sm btn-info mx-2">Finalizar</button>
                                </Link>
                                <Link to='/'>
                                    <button className="btn-sm btn-info mx-2">Continuar Comprando</button>
                                </Link>
                            </div>
                    }

                <p>Hecho en Argentina x Pernambuco</p>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage