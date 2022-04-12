import Container from '@mui/material/Container';
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext';

const CartPage = () => {

  const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext()

    return(
        <Container className='container-general'> 
        <h1 style={{textAlign: 'center'}}>Cart</h1>

        {
            (cartList.length === 0)
            
            &&
            
            <div>
                <p>Tu carrito está vacío</p>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </div>
            
        }    
            
        {                    
            cartList.map((prod) =>(
                <div key={ prod.id }>
                    <div>
                        <h2> {prod.title}</h2>
                        <img src={`../${prod.image}`} alt=""  />
                        <p> Precio: $ {prod.price}</p>
                        <p> Cantidad: { prod.cantidad}  </p>
                    </div>
                    <div>
                    
                        <button onClick={() => deleteOne(prod.id)}>
                            Eliminar
                        </button>
                    
                    </div>
                </div>
            ))
        }
            
            
        {
            (cartList.length >= 1)
            
            &&

            <div>
                <h4> Total de la compra: {sumaTotal()} </h4>
                <button onClick={emptyCart}>Vaciar carrito</button>
            </div>

        }     


      </Container>
    )
}

export default CartPage;