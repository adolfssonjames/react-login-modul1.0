import {useState, useEffect} from 'react';


const CustomHooks = (callback, FormValidation) => {     //definerar parameter
    const [values, setValues] = useState ({           //det aktiva/initiala värdet, och förrändringsvärde/uppdateringsvärde
        username: '',                                   //targetar username i formuläret. staten är tom
        email:'',                                       //targetar email i formuläret
        password:'',                                    //targetar lösenord i formuläret
        password2:''
    });
    
    const [errors, setErrors] = useState ({});
    const [isSubmit, setIsSubmit] = useState(false);    //om formulär inte är fylld och clickar på submit sker error och false usestate


    const handleChange = e => {                         //hanterar ändringar i formuläret
        const { name, value } = e.target;               //name & value targetar name i formulärets inputs med hjälp av e.target
        setValues({                                     //uppdateringsvärde
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
        if (Object.keys(errors).length === 0 && isSubmit) {       // om det finns errors så displayar error annars inte / om det är 0 errors = sumbitar formen
            callback();                                             
        }
    }, 
        [errors, isSubmit, callback]                 // useeffect körs endast om dessa dependencies innanför denna array körs/ändras.
    );

    return { handleChange, values, handleSubmit, errors };              // Kör alla ovanstående funktioner o props som är i objektet
};




export default CustomHooks;