import { useState, useEffect } from 'react';
import Validate from './ValidateInfo'


const UserForm = ({ handler, Validate }) => {
    const [values, setValues] = useState({
        name:"",
        description:""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handlechange = (e, key) => setValues({...values, [key]: e.target.value});


    const handleSubmit = e => {
        e.preventDefault();
        console.log("validation",values);
        setErrors(Validate(values));
        setIsSubmitting(true)

    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // console.log(values.name)
            // console.log(values.description)
            handler(values);
        }
    },
        [errors]
    )

    return { handlechange, handleSubmit, errors };
};

export default UserForm
