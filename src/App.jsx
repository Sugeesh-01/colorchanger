import React, { useState } from 'react'; 
import './App.css'; 
function App() { 
const [bgColor, setBgColor] = useState('#000000	'); 
const redColor = () => { 
const Red = '#ff0000'; 
setBgColor(Red); 
};

const blueColor = () => { 
    const Blue = '#0000FF'; 
    setBgColor(Blue);

}; 

const yellowColor = () => { 
    const yellow = '#FFFF00'; 
    setBgColor(yellow);

};

const brownColor = () => { 
    const brown = '#964B00'; 
    setBgColor(brown);

};



return ( 

<div className="container" style={{ backgroundColor: bgColor,  }}> 
<header className="App-header">
 <h1>Background Color Changer</h1> 
<button className='red' onClick={redColor}>Red</button> 
<button className='blue' onClick={blueColor}>Blue</button> 
<button className='yellow' onClick={yellowColor}>Yellow</button>
<button className='brown' onClick={brownColor}>Brown</button>





</header> 
</div> 
); 

} 

export default App