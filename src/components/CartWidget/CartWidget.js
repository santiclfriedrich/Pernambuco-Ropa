import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './CartWidget.css';

const CartWidget = () => {
    return(
        <div className="cart-header">
        <ShoppingBagIcon />
        My Cart: (<span className="cart-count"> 0 </span>)
      </div>
    )
}

export default CartWidget