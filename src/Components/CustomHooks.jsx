import {useState, useEffect} from 'react';


const CustomHooks = (callback, FormValidation) => {
    const [values, setValues] = useState ({           //det aktiva värdet, och förrändringsvärde
        username: '',                                   //targetar username i formuläret. staten är tom
        email:'',                                       //targetar email i formuläret
        password:'',                                    //targetar lösenord i formuläret
        password2:''
    });
    const [errors, setErrors] = useState ({});
    const [isSubmit, setIsSubmit] = useState(false);    //om formulär inte är fylld och clickar på submit sker error och false usestate


    const handleChange = e => {                         //hanterar ändringar i formuläret
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();                         //hanterar så att sidan inte refreshar sidan by default när man submitar formulär

        setErrors(FormValidation(values));
        setIsSubmit(true);                          // om formulär är fylld och clickar på knappen, så körs submit
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback();
        }
    }, 
        [errors, isSubmit, callback]
    );

    return { handleChange, values, handleSubmit, errors };              // Kör alla ovanstående funktioner
};




export default CustomHooks;