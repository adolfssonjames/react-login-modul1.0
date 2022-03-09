import React from 'react';
import './App.css';
import Form from './Components/Form';
import background from "./leyre-71SHXwBLp5w-unsplash.jpg";



function App() {
  const myStyle={
    backgroundImage: `url(${background})` ,
    height:'150vh',
      
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
  };
  return (
    <div style={myStyle}>
    <h1 className='rubrik'> James Login Modul 1.0 </h1>
      <Form /> ;
  </div>
  );
}


export default App;
