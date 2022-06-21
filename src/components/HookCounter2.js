import React, { useState } from 'react'

const HookCounter2 = () => { 
  const initalCount = 0
  const [count,setCount] = useState(initalCount)


  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  const incrementFive = () => {
    for(let i = 0 ; i < 5 ; i++) {
        // setCount(count + 1)
        // if u want to update state value from previus state value
        setCount(prevC => prevC + 1)
    }
  }

  return (
    <div>
        Count : {count}
        <button onClick={() => setCount(initalCount)}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounter2