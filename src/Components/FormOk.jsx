
import React from 'react';

import './Style.css';


const FormOk = () => {
    
  return (
    <div className="content-form-ok"  >
        
        <h1 className='acc'>Account Created, Welcome!</h1>
        <p>You are now logged in, LOG IN AGAIN</p>
         
        <img src="logo512.png" alt="" />
        <button className='re'>LOG IN AGAIN</button>
    </div>
        
  );
};

export default FormOk;
