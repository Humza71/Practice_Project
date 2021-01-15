//import UserForm from "./UserForm"

export default function ValidateInfo(values) {
    let errors = {}
    // console.log(values.username)
    // if (!values.username) {
    //     errors.username = 'Username Required'
    // }
    if (!values.name) {
        errors.name = 'Name Required'
    }
    if (!values.description) {
        errors.description = 'Description Required'
    }
    // if (!values.email) {
    //     errors.email = 'Email Required'
    // }
    // else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]_\/[A-Z]{2,}$/i.test(values.email)){
    //     errors.email = 'Email is invalid'
    // }
    // if (!values.password) {
    //     errors.password = 'Password is Required'
    // }
    // else if (values.password.length < 6) {
    //     errors.password = 'Password needs to be 6 characters or more'
    // }
    // if (!values.password2) {
    //     errors.password2 = 'Password is Required'
    // }
    // else if (values.password2 !== values.password) {
    //     errors.password2 = 'Passwords do not match'
    // }
    return errors;
}
