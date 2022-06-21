import React, { useEffect, useState } from 'react'

const HookCounter = () => {

    const [channelName,setName] = useState("ABC")
    const [count,setCount] = useState("0")
    const [counter ,setCounter] = useState(0)
    const [counter1 ,setCounter1] = useState(0)

    const handleClick = () => {
        setName("bghy")
        setCount("1")
    }

     const Increment = () => {
         // alert("This is increment")
         setCounter(counter+1)
     }

     const Decrement = () => {
        // alert("This is decrement")
        setCounter1(counter1-1)
    }

    // const Incremented = () => {
    //     for(let i = 0 ; i < 10 ; i++) {
    //         setCounter(prevCount => prevCount + 1) 
    //     }
    // }
    //if u want to update the state use useEffect
    useEffect(() => {
        // alert("This is increment")
        console.log("Clicked")
    },[counter1][counter]);

  return (
    <div>
        <h1>{channelName}</h1>
        {/* <h1>{count}</h1> */}
        {/* <p>{name}</p> */}
        <button type='button' onClick={handleClick}>Click me</button>
        <button type='button' onClick={Increment}>Increment {counter}</button>
        <button type='button' onClick={Decrement}>Decrement {counter1}</button>
        {/* <button type='button' onClick={Incremented}>Incremented by 10 - {counter}</button> */}

    </div>
  )
}

export default HookCounter