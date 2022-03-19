import React from 'react';
import './App.css';
import Form from './Components/Form';
import background from "./leyre-71SHXwBLp5w-unsplash.jpg";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './Components/Login';
import './Components/Style.css';


function App() {
 
  const myStyle={
        backgroundImage: `url(${background})` ,
        height:'150vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
  };
  return (
    <Router>
       <div style={myStyle}>
          <h1 className='rubrik'> James Login Modul 1.0 </h1>
          <nav className='navbar'>
              <ul className='meny'>
                <button><li className='li-link1'> <Link to="/">Create Account</Link></li></button> 
                <button><li> <Link to="/Login">Login</Link></li></button> 
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Form />}></Route>
              <Route path="/Login" element={<Login />}></Route>
            </Routes>
        
        </div>
  </Router>
  );
}


export default App;
