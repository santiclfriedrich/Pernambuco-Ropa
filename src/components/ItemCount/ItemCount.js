import React,{useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCount(count - 1)
    }
    return(
        <div>
            <button onClick={removeStock}>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount;
