import { useState, useEffect } from 'react';


const Login = () => {
    const [user, setUser] = useState( [], () => {      
      const localData = localStorage.getItem ('user'); 
      return localData ? JSON.parse(localData) : [];
    });                                                         //motsvarar login inputs och localstorage
    const [pwd, setPwd] = useState( [], () => {
      const localData = localStorage.getItem ('password');
      return localData ? JSON.parse(localData) : [];
    });     
      
    const [errMsg, setErrMsg] = useState('');     //motsvarar ett error 
    const [success, setSuccess] = useState(false);  //motsvarar success / när login blir godkänd
   
    

    useEffect(() => {           //när effect körs så tömmer vi error messages (om användaren ändrar user eller passwordinput)
        setErrMsg('');
    }, [user, pwd])

    useEffect (()=> {
      localStorage.setItem('user', JSON.stringify(user))                         //localstorage
      localStorage.setItem('password', JSON.stringify(pwd))
    }, [user, pwd]);  

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