import React,{useState} from 'react'
import FormSuccess from '../SignUp/FormSuccess'
import SignUpForm from '../SignUp/SignUpForm'

function AddBrand() {
    // const initialValues = {
    //     username: '',
    //     email: '',
    //     password: '',
    //     password2: ''
    // }
    const [isSumitted, setIsSubmitted] = useState(false)
    function SubmitForm(data) {
        // console.log(initialValues.username)
        // console.log(initialValues.email)
        setIsSubmitted(true);
        // console.log(isSumitted)
      //  AddCustomer(initialValues.username, initialValues.email, initialValues.password, initialValues.password2);
    }
    return (
        <div>
            <SignUpForm  submit={SubmitForm} />
        </div>
    )
}

export default AddBrand
