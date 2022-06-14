// import logo from './logo.svg';
import React from 'react';
import './App.css';

// const name = <span>Hello react</span> 

// const test = () => {
//   alert("Hello heyyy!!!")
// }

// const age = (a) => {

//   if(a > 18) {
//     return <span>You are elegible </span>
//   }
//   else {l̥
//     return <span>You are not elegible </span>
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <h1 className='h1Tag'>Rishon {name}</h1>
//       <button onClick={test}>Click me</button>
//       {age(19)}
//     </div>
//   );
// }

class App extends React.Component{
  render() {
    return <h1>Hello class component</h1>
  }
}

export default App;
