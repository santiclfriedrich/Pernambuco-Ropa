import React,{useState, useEffect} from 'react';
import Card from '../Card/Card';
import './ListProducts.css'
import mockProductos from '../../utils/ProductsMock'
import { useParams } from 'react-router-dom'
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';


const ListProducts = ({children}) => {
    
    const { category } = useParams()
    const [contador, setContador] = useState(0)

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'productos')
        const productosSnapshot = await getDocs(itemsCollection)
        console.log("productosSnapshot : ", productosSnapshot)
        const productList = productosSnapshot.docs.map((doc) => {

            let product = doc.data()
            product.id = doc.id
            console.log("product:", product)
            return product


        }
    )
    return productList

    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    const agregarClick = (e, nombre) => {
        e.stopPropagation()
        console.log("Nombre desde el hijo:", nombre)
        setContador(contador + 1)
    }

    return(
        <div className="container-cards">
            <div>
                
            </div>
            {console.log("products: ", products)}
            {products.map( ( product ) =>  <Card data={product} key={product.id} action={agregarClick}/>)}
        </div>
    ) 
}

export default ListProducts;