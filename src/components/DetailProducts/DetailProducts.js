import React,{ useState, useEffect } from 'react'
import './DetailProducts.css'
import ItemCount from '../ItemCount/ItemCount'
import Container from '@mui/material/Container';



export default function DetailProducts({ data }) {
    
    return(

        <Container className='general-container'>
            <div className='product'>
            <img src={data.image} alt="" />
            <div className='container-product'>
                <h2>{data.title}</h2>
                <p>$ {data.price} ARS</p>
                <p>Talle: {data.size}</p>
                <p>Stock: {data.stock}</p>
                < ItemCount />
                <button>Agregar al carrito</button>
                <button>Comprar</button>
                <p>{data.message}</p>
                <p>Hecho en Argentina x Pernambuco</p>
            </div>
            </div>
        </Container>
    )
} 