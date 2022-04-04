import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({ data }) {
    const { title, price, size, stock, image, id } = data

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            <div className='container-card-info'>
                <h2>{title}</h2>
                <p>$ {price} ARS</p>
                <Link to={`/shop/${id}`}><button>Ver Detalle</button></Link>
            </div>
        </div>
    )
} 