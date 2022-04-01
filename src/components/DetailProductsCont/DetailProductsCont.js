import React,{useState, useEffect} from 'react';
import DetailProducts from '../DetailProducts/DetailProducts';
import './DetailProductsCont.css'
import mockProducto from '../../utils/ProductsMock';


const DetailProductsCont = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("fin de llamada")
        })
    }, [])

    return (
        <>
            
            <DetailProducts data={dataProduct}/>
        </>
    )
}

export default DetailProductsCont;