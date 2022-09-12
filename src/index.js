import React from 'react';
import ReactDOM from 'react-dom';



const tick=()=>{
  let elem=(
    <div>
    
    <h1>Timer</h1>
    <h2>
      {
        new Date().toLocaleTimeString()
      }
    </h2>

    </div>
  )
  ReactDOM.render( elem,document.getElementById('root'));
}
setInterval(() => {
  tick();
}, 1000);

