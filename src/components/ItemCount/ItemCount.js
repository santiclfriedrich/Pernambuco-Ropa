import React,{useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function onAddCount() {
        if (count < stock){
            setCount(count + 1)
        }
    }

    function removeStock() {
        if(count > initial ){
            setCount(count - 1)
        }       
    }

    const add = () => {
       onAdd(count)
   }
    return(
        <div>
            <div>
            <button onClick={removeStock}>-</button>
            <p>{count}</p>
            <button onClick={onAddCount}>+</button>
            </div>
            <div>
            <button onClick={add}> Agregar al carrito </button>
            </div>
        </div>
        
    )
}

export default ItemCount;
