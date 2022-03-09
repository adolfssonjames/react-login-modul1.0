import React from 'react';
import CustomHooks from './CustomHooks';
import FormValidation from './FormValidation';
import './Style.css';




const FormCreateAcc = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = CustomHooks(submitForm, FormValidation);

  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h2 className='orbit-text'>JOIN THE ORBIT</h2>
            <h2 className='no-account-text'>
                Dont have an account? Create one right away and login!
            </h2>
        <div className="form-inputs">
            <label htmlFor="username"
                className="form-label">
                    Username
            </label>
                <input id="username" type="text" name='username' className="form-input" placeholder='Enter Username' value={values.username} onChange={handleChange} />
                {errors.username && <p> {errors.username}</p>}
        </div>
        <div className="form-inputs">
            <label htmlFor="email"
                className="form-label">
                    Email
            </label>
                <input id="email" type="email" name='email' className="form-input" placeholder='Enter Email' value={values.email} onChange={handleChange}/>
                {errors.email && <p> {errors.email}</p>} 
        </div>
        <div className="form-inputs">
            <label htmlFor="password"
                className="form-label">
                   Password
            </label>
                <input id="password" type="password" name='password' className="form-input" placeholder='Enter password'value={values.password} onChange={handleChange}/>
                {errors.password && <p> {errors.password}</p>}
        </div>
        <div className="form-inputs">
            <label htmlFor="password2"
                className="form-label">
                    Confirm Password
            </label>
                <input id="password2" type="password" name='password2' className="form-input" placeholder='Enter password'value={values.password2} onChange={handleChange}/>
                {errors.password2 && <p> {errors.password2}</p>}
        </div>
        <button className='form-btn' type='submit'>Create Account</button>
       
        </form>
    </div>
  );
};

export default FormCreateAcc;