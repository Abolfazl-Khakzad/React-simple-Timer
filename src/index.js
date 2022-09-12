import React from 'react';
import ReactDOM from 'react-dom';
// import { Component } from 'react';


class Hello extends React.Component {

  render() { 
    return (
      <h1>Timer</h1>
    );
  }
}
 


class Timer extends React.Component {
  render() { 
    return (
      <h2 className="timer">
      {
      new Date().toLocaleTimeString()
      }
    </h2>
    );
  }
}
 

class App extends React.Component {
  render() { 
    return (
    
        <div className="main">
        <Hello/>
        <Timer/>
       
        </div>
    )
  }
}
 
export default App;


const tick=()=>{
  
  ReactDOM.render(<App/> , document.getElementById('root'));
}

setInterval(() => {
  tick();
}, 1000);