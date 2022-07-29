import React, { useState } from 'react'

export  const Counter = () => {

  const [count, setCounter] = useState(0)

  const handleIncrement = ()=>{
    setCounter((prev)=>{
      return prev+1;
    })
  };
  
  const handleDecrement =()=>{
    setCounter((prev)=>{
      return prev-1;
    })
  }

  return (
    <div>
        <h1>Counter = {count}</h1>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Substract</button>
    </div>
  )
}
