import React from 'react'

function FunctionClick() {

    function changeEvent() {
        console.log("Hello event handling")
    }


  return (
    <div>
        <button onClick={changeEvent}>Click ME</button>
    </div>
  )
}

export default FunctionClick