import { useState, useEffect } from 'react';


const Login = () => {
    const [user, setUser] = useState( [], () => {      
      const localData = localStorage.getItem ('user');                         //localstorage  | hämtar data från user input   
      return localData ? JSON.parse(localData) : [];                          // om vi skrivit in data och det är sant så visar den datan. Annars så visar den en tom array.
    });                                                                      //motsvarar login inputs och localstorage
    const [pwd, setPwd] = useState( [], () => {                             
      const localData = localStorage.getItem ('password');
      return localData ? JSON.parse(localData) : [];
    });     
      
    const [errMsg, setErrMsg] = useState('');                       //motsvarar ett error 
    const [success, setSuccess] = useState(false);                  //motsvarar success / när login blir godkänd
   
    

    useEffect(() => {                                                //när effect körs så tömmer vi error messages (om användaren ändrar user eller passwordinput)
        setErrMsg('');
    }, [user, pwd])

    useEffect (()=> {                                                           //useEffecten körs varje gång datan uppdateras
      localStorage.setItem('user', JSON.stringify(user))                         //localstorage  | skickar in datan med setitem via user input och vid submit
      localStorage.setItem('password', JSON.stringify(pwd))                     // json.strinify stringifyar vårat object till en json string så att vi kan spara "datan". då det inte går att spara datan som object i localstorage
    }, [user, pwd]);                                                           // vi kan sedan parsa json.stringen tillbaka till ett object med getitem

    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(user, pwd);
      setUser({user});
      setPwd ({pwd});
      setSuccess(true);
       
    }

    return (
        <>

            {success ? (
                <div>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                       Welcome:)
                    </p>
                 
                    <img className='welcome-gif2' src="tomjerry.webp" alt="" /> 
                </div>
            ) : (
                <div className='signin-formdiv'>
                    <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>    
                    <img className='orbit-bild2' src="james_circel_orbit_kekw.png" alt="" />
                    <h1>Log in</h1>
                    <form className='login-frm' onSubmit={handleSubmit}>
                        <label className='signin-label-user' htmlFor="username">Username:</label>
                        <input
                            className='login-user-input'
                            type="text"
                            id="username"
                            placeholder='Enter username'
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label className='signin-label-pwd' htmlFor="password">Password:</label>
                        <input
                            className='login-pass-input'
                            type="password"
                            id="password"
                            placeholder='Enter password'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='sign-in-btn'>Log In</button>
                    </form>
                  
                </div>
            )}
        </>
    )
}

export default Login