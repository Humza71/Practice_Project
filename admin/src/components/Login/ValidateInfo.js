//import UserForm from "./UserForm"

export default function ValidateInfo(values) {
    let errors = {}
    if (!values.username.trim()) {
        errors.username = 'Username Required'
    }
 
    if (!values.password) {
        errors.password = 'Password is Required'
    }
    else if (values.password.length < 4) {
        errors.password = 'Password needs to be 6 characters or more'
    }
  
    return errors;
}
