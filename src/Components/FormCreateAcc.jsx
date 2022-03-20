import React from 'react';

import { useState, useEffect } from 'react';
import './Style.css';




const FormCreateAcc = () => {                                       //SubmitForm inpassad från funktion i Form.jsx
             // destructar values av hooksen från CustomHooks
 


    const [username, setUsername] = useState( [], () => {      
        const localData = localStorage.getItem ('username');                         //localstorage  | hämtar data från user input   
        return localData ? JSON.parse(localData) : [];                          // om vi skrivit in data och det är sant så visar den datan. Annars så visar den en tom array.
      });                                                                      //motsvarar login inputs och localstorage
      const [email, setEmail] = useState( [], () => {                             
        const localData = localStorage.getItem ('email');
        return localData ? JSON.parse(localData) : [];
      });
      const [password, setPassword] = useState( [], () => {                             
        const localData = localStorage.getItem ('password');
        return localData ? JSON.parse(localData) : [];
      });
      const [password2, setPassword2] = useState( [], () => {                             
        const localData = localStorage.getItem ('password2');
        return localData ? JSON.parse(localData) : [];
      });        
        
      const [errMsg, setErrMsg] = useState('');                      
      const [success, setSuccess] = useState(false);                  //motsvarar success / när login blir godkänd

      
      useEffect(() => {                                                //när effect körs så tömmer vi error messages (om användaren ändrar user eller passwordinput)
        setErrMsg('');
    }, [username, password, email, password2])
    
        
    
     
      
  
      
      useEffect (()=> {                                                           //useEffecten körs varje gång datan uppdateras
        localStorage.setItem('username', JSON.stringify(username))                         //localstorage  | skickar in datan med setitem via user input och vid submit
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('password', JSON.stringify(password))                     // json.strinify stringifyar vårat object till en json string så att vi kan spara "datan". då det inte går att spara datan som object i localstorage. vi kan sedan parsa json.stringen tillbaka till ett object med getitem
        localStorage.setItem('password2', JSON.stringify(password2))
      }, [username, email, password, password2]);                                                           // Varje gång user eller pwd data ändras så körs useEffect

  
      const handleSubmit = async (e) => {
          e.preventDefault();
        console.log(username, password, email, password2);
        setUsername({username});
        setEmail({email});
        setPassword ({password});
        setPassword2 ({password2});
        setSuccess(true);
         
      }

     


    return (

     <>    

        {success ? (
            <div className='form-content-right'>
                <h1>Account created!</h1>
                <br />
                <p>
                You are now logged in, Welcome:)
                </p>
            
                <img className='welcome-gif' src="tomjerry.webp" alt="" /> 
            </div>
                ) : (

                <div className="form-content-right">
                    
                     <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>  
                    <form className="form" onSubmit={handleSubmit}> 
                        <h2 className='createAcc-text'>Create Account</h2>
                            <h2 className='no-account-text'>
                            Dont have an account? Create one right away and login!
                            </h2>
                            <div className="form-inputs">
                                    <label htmlFor="username"
                                        className="form-label">
                                        Username
                                    </label>                                                                                                                           
                                    <input 
                                    id="username"
                                    type="text" 
                                    name='username' 
                                    className="form-input" 
                                    placeholder='Enter Username' 
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username} 
                                    required
                                    /> 
                                                                                                                 
                            </div>
                            <div className="form-inputs">
                                    <label htmlFor="email"
                                        className="form-label">
                                        Email
                                    </label>
                                    <input 
                                    id="email"
                                    type="email" 
                                    name='email' 
                                    className="form-input" 
                                    placeholder='Enter Email' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} 
                                    required
                                    />
                                    
                            </div>
                            <div className="form-inputs">
                                    <label htmlFor="password"
                                        className="form-label">
                                        Password
                                    </label>
                                    <input 
                                    id="password"
                                    type="password" 
                                    name='password' 
                                    className="form-input" 
                                    placeholder='Enter password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    />
                                  
                            </div>
                            <div className="form-inputs">
                                    <label htmlFor="password2"
                                        className="form-label">
                                        Confirm Password
                                    </label>
                                    <input 
                                    id="password2" 
                                    type="password" 
                                    name='password2' 
                                    className="form-input"
                                    placeholder='Enter password'
                                    onChange={(e) => setPassword2(e.target.value)}
                                    value={password2} 
                                    required
                                
                                    />
                                    
                            </div>
                            <button className='form-btn' type='submit'>Create Account</button>
                
                    </form>
                </div>
            )}
     </>
    );
};

export default FormCreateAcc;