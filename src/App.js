// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import CHeader from './components/CHeader';
import Form from './components/Form';
import Routing from './components/Routing';

// import CHeader from './components/CHeder';

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
    const number = [3,4,5,6];

    return (
      <div className='App'>
        {/* <Header name = "Rishon"/>
        <Header name = "Rishon" last = "kumar"/>
        <Header age = "14"/> */}

        <Header name = "yzz">
          <p>Helllo how are you</p>
        </Header>

        <CHeader name = "PASA"/>

        <Channel/>
        <FunctionClick/>
        <CFunctionClick roll = "22" numbers = {number} />

        <h5>Froms</h5>

        <Form></Form>

        <h4>Routing</h4>
        <Routing></Routing>

      </div>
    )
  }
}

export default App;
