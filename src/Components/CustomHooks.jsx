import {useState, useEffect} from 'react';

const CustomHooks = () => {
    const [values, setValues] = useState ({
        username: '',
        email:'',
        password:'',
        password2:''
    });
    const [errors, setErrors] = useState ({});


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return {handleChange, values, handleSubmit};
};




export default CustomHooks;