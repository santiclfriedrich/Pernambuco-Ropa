import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = () => {
    const [count, SetCount] = useState(1)
    const [stock, setStock] = useState(8)

    const onAdd = () =>{
        if(count < stock)
        SetCount(count + 1)
    }

    const removeAdd = () =>{
        if(count > 1)
        SetCount(count - 1)
    }
    return(
        <div className="">
          <button onClick={removeAdd}>-</button>
          <p>{count}</p>
          <button onClick={onAdd}>+</button>
      </div>
    )
}

export default ItemCount;