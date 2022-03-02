import React from 'react'
import CustomHooks from './CustomHooks'

const FormCreateAcc = () => {
    const {handleChange, values, handleSubmit} = CustomHooks();

  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>
                Dont have an account? Create one right away!
            </h1>
        <div className="form-inputs">
            <label htmlFor="username"
                className="form-label">
                    Username
            </label>
                <input id="username" type="text" name='username' className="form-input" placeholder='Enter Username' value={values.username} onChange={handleChange}/>
        </div>
        <div className="form-inputs">
            <label htmlFor="email"
                className="form-label">
                    Email
            </label>
                <input id="email" type="email" name='email' className="form-input" placeholder='Enter Email' value={values.email} onChange={handleChange}/>
        </div>
        <div className="form-inputs">
            <label htmlFor="password"
                className="form-label">
                   Password
            </label>
                <input id="password" type="password" name='password' className="form-input" placeholder='Enter password'value={values.password} onChange={handleChange}/>
        </div>
        <div className="form-inputs">
            <label htmlFor="password2"
                className="form-label">
                    Confirm Password
            </label>
                <input id="password2" type="password" name='password2' className="form-input" placeholder='Enter password'value={values.password2} onChange={handleChange}/>
        </div>
        <button className='form-btn' type='submit'>Create Account</button>
        <span className="form-login">
            Already have an account? Login <a href='#'>here</a>
        </span>
        </form>
    </div>
  );
};

export default FormCreateAcc;