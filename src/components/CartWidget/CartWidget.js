import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const { cantidad, cartList } = useCartContext()

    return(
        <div className="cart-header">
          < Link to={`/cart`} className="cart-logo">
        <ShoppingBagIcon />
        </Link>
        My Cart: (<span className="cart-count"> { cartList.length > 0 && cantidad()} </span>)
      </div>
    )
}

export default CartWidget