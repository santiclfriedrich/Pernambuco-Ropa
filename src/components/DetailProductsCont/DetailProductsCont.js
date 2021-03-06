import React,{useState, useEffect} from 'react';
import DetailProducts from '../DetailProducts/DetailProducts';
import './DetailProductsCont.css'
import mockProductos from '../../utils/ProductsMock'


const DetailProductsCont = ({}) => {
    const [setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProductos)
            }, 5000)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
        }).finally( () => {
            console.log("fin de llamada")
        })
    }, [])

    return (
        <div>
            
           <DetailProducts />
        </div>
    )
}

export default DetailProductsCont;