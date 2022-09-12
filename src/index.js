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
  
    state={
      time : new Date().toLocaleTimeString()
    }
  
  render() { 
    this.setState({
      time: new Date().toLocaleTimeString()
    })
    return (
      <h2 className="timer">
      {
        this.state.time
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



ReactDOM.render(<App/> , document.getElementById('root'));
// const tick=()=>{
  
//   ReactDOM.render(<App/> , document.getElementById('root'));
// }

// setInterval(() => {
//   tick();
// }, 1000);