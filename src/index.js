import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class App extends Component {
  render() { 
    return (
    
        <div>
        
        <h1>Timer</h1>
        <h2>
          {
          new Date().toLocaleTimeString()
          }
        </h2>
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