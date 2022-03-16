import { useRef, useState, useEffect } from 'react';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(user, pwd);
      setUser('');
      setPwd ('');
      setSuccess(true);
       
    }

    return (
        <>
            {success ? (
                <div>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                       Welcome :)
                    </p>
                    <img className='welcome-gif2' src="tomjerry.webp" alt="" /> 
                </div>
            ) : (
                <div className='signin-formdiv'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <img className='orbit-bild2' src="james_circel_orbit_kekw.png" alt="" />
                    <h1>Sign In</h1>
                    <form className='login-frm' onSubmit={handleSubmit}>
                        <label className='signin-label-user' htmlFor="username">Username:</label>
                        <input
                            className='login-user-input'
                            type="text"
                            id="username"
                            placeholder='Enter username'
                            ref={userRef}
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
                        <button className='sign-in-btn'>Sign In</button>
                    </form>
                  
                </div>
            )}
        </>
    )
}

export default Login