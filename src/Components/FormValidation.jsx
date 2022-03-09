export default function FormValidation(values) {
    let errors = {}

    if(!values.username.trim()) {  //trim tar bort whitespaces
        errors.username = "Username required" ;
    }


    
    if(!values.email) { // om inget värde anges körs denna error nedan
        errors.email = "Email required" ;
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not correct"; //om det finns ett försök till email men inget email hittas, så körs denna error

    }

    if(!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be longer than 6 Characters";
    }

    if(!values.password2) {
        errors.password2 = "Password required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password does not match";
    }
    return errors; // returnerar errors
}