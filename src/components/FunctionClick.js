import React from 'react'

function FunctionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello event handling")
    }


  return (
    <div>
        <button onClick={changeEvent}>Click ME</button>
        <a href="https://www.youtube.com/" onClick={changeEvent}>GOogle</a>
    </div>
  )
}

export default FunctionClick