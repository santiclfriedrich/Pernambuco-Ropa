import React,{useState, useEffect} from 'react';
import Card from '../Card/Card';
import './ListProducts.css'

const ListProducts = () => {
    const mockProductos = [{
        title : 'Remera Negra',
        id: 1,
        size: 'M',
        price: 2700,
        image: 'remera-black.png',
        stock: 7
    },
    {
        title : 'Gorra Marron',
        id: 2,
        size: '-',
        price: 4350,
        image: 'gorra-marron.png',
        stock: 4
    },
    {
        title : 'Cargo Pants',
        id: 3,
        size: 'L',
        price: 7800,
        image: 'cargo-pants.png',
        stock: 2
    }
]

    const [items, setItems] = useState([])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(mockProductos);
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
        <div className="container-cards">
            <h2>Pernambuco Favourities</h2>
            {items.map( ( item ) => {
                const {id} = item
                return(
                    <Card data={item} key={id}/>
                ) 
            })}
        </div>
    ) 
}

export default ListProducts;