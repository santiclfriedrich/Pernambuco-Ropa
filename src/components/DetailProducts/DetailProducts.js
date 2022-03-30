import React,{ useState, useEffect } from 'react'
import './DetailProducts.css'
import ItemCount from '../ItemCount/ItemCount';

export default function DetailProducts({ data }) {
    const { title, price, size, stock, image, message } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)

    const addStock = (stock) => {
        setCount(count + 1)
    }
    const removeStock = (stock) => {
        setCountTest(countTest - 1)
    }
    return(
        <div className="product">
            <img src={`./${image}`} alt={image} />
            <div className='container-product'>
                <h2>{title}</h2>
                <p>$ {price} ARS</p>
                <p>Talle: {size}</p>
                <p>Stock: {stock}</p>
                < ItemCount />
                <button>Comprar</button>
                <p>{message}</p>
            </div>
        </div>
    )
} 