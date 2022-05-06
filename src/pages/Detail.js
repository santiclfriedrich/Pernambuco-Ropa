import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import { doc, getDoc } from "firebase/firestore"
import db from "../firebase"
import './Detail.css'

const DetailPage = () => {
    const { id, } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const [ contador, setContador ] = useState(0)
    
    const { agregarAlCarrito } = useCartContext()

    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            navigate('/error')
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])

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
                        
                            <div className="mt-5 ms-5 counter">
                                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                            </div>
                        
                        : 
                            <div className="mt-5 buy-buttons">
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