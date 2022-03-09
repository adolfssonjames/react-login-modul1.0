import React, { useState } from 'react';
import FormCreateAcc from './FormCreateAcc';
import FormOk from './FormOk';
import './Style.css';



const Form = () => {
  const [isSubmit, setIsSubmit] = useState (false);

  function submitForm() {
    setIsSubmit(true);
  }
  
  return (
    
    <div className="form-container">
    
      <div className="form-content-left">
      <img className="orbit-bild" src="james_circel_orbit_kekw.png" alt="LOGO" />
      </div>
      
      
      {!isSubmit ? (
        <FormCreateAcc submitForm={submitForm} /> 
        ) : (
          <FormOk />
          )}
          
   </div>
   
    
    
    
  );
};

export default Form;