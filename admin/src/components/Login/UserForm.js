import { useState, useEffect } from 'react';
import Validate from './ValidateInfo'


const UserForm = ({ handler, Validate }) => {
    const [values, setValues] = useState({
        // ...initialValues
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handlechange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(Validate(values));
        setIsSubmitting(true)

    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            handler();
        }
    },
        [errors]
    )

    return { handlechange, values, handleSubmit, errors };
};

export default UserForm
