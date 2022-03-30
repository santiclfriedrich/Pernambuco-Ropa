import React,{useState, useEffect} from 'react';
import DetailProducts from '../DetailProducts/DetailProducts';
import './DetailProductsCont.css'

const DetailProductsCont = () => {
    const mockProductosDetail = [{
        title : 'Remera Negra',
        id: 1,
        size: 'M',
        price: 2700,
        image: 'remera-black.png',
        stock: 7,
        message: 'Remera manga corta esc."O". Cuello complemento rib color blanco.'
    },
    {
        title : 'Gorra Marron',
        id: 2,
        size: '-',
        price: 4350,
        image: 'gorra-marron.png',
        stock: 4,
        message: 'Gorra Corderoy basta media 100% algodón. Talle único. Etiqueta de marca bordada en frente.'
    },
    {
        title : 'Cargo Pants',
        id: 3,
        size: 'L',
        price: 7800,
        image: 'cargo-pants.png',
        stock: 2,
        message: 'Pantalon Cargo Azul. Tiro alto/ Regular. Composición: Algodón'
    }
]

    const [items, setItems] = useState([])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(mockProductosDetail);
            }, 2000);

        }) ;
    } ;

    useEffect( () => {
        getItems().then( (productos) => {
            setItems(productos)
        }).finally( () => {
            console.log("fin de llamada")
        })
    }, [])

    return(
        <div className="container-products">
            {items.map( ( item ) => {
                const {id} = item
                return(
                    <DetailProducts data={item} key={id}/>
                ) 
            })}
        </div>
    ) 
}

export default DetailProductsCont;