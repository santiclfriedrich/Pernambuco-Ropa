import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({ data }) {
    const { title, price, size, stock, image, id } = data

    return(
        
        <div className="card-item">
            <div className='card-image'>
            <Link to={`/shop/${id}`}>
            <img src={`./${image}`} alt={image} />
            </Link>
            </div>
            <div className='container-card-info'>
                <h2>{title}</h2>
                <p>$ {price} ARS</p>
            </div>
        </div>
        
    )
} 