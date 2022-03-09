import React from 'react';
import './Style.css';

const Login = () => {
  
  return (
    <div className="form-container2">
      <img className="orbit-bild2" src="james_circel_orbit_kekw.png" alt="LOGO" />
    <div className="login-form">
      <h2>Login</h2>
      <h3>Enter The Orbit</h3>
      <form >
        <input className='login-user-input' type="text" placeholder='Username' />
        <input className='login-pass-input' type="password" placeholder='Password' />
        <button className='login-button' type='submit'>LOGIN</button>
      </form>
    </div>
    </div>
    
  );
}

export default Login;