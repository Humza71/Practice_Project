import React from 'react'
import userForm from './UserForm';
import Validate from './ValidateInfo'
import './Form.css';
const SignUpForm = ({ submitForm, data,myData }) => {
    // const initialValues = {
    //     username: '',
    //     email: '',
    //     password: '',
    //     password2: ''
    // }

    // initialValues.username = values.username
    // initialValues.email = values.email
    // initialValues.password = values.password
    // initialValues.password2 = values.password2
    // const onFinish = () => {
    // }

    const { handlechange, values, handleSubmit, errors } = userForm({ handler, Validate });
    // console.log("!!!!!!!!!!!", values)

//    values.username = myData.username
//    values.email = myData.email


    function handler() {

        console.log("In Handler")
        // data.username = values.username
        // data.email = values.email
        // data.password = values.password
        // data.password2 = values.password2
        submitForm(values)
    }
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>

                <div className="form-inputs">

                    <label htmlFor="username" className='form-label'>
                        Username
                    </label>
                    <input id="username"
                        className="form-input"
                        type="text"
                        name="username"
                        placeholder="Enter User Name"
                        // value={values.username}
                        onChange={handlechange}
                    />
                    {errors.username && <p> {errors.username} </p>}
                </div>

                <div className="form-inputs">

                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input id="email"
                        className="form-input"
                        type="email" name="email"
                        placeholder="Enter your Email"
                        // value={values.email}
                        onChange={handlechange}
                    />
                    {errors.email && <p> {errors.email} </p>}
                </div>

                <div className="form-inputs">

                    <label htmlFor="password" className='form-label'>
                        Password
</label>
                    <input id="password" className="form-input" type="password" name="password" placeholder="Enter your password"
                        // value={values.password}
                        onChange={handlechange}
                    />
                    {errors.password && <p> {errors.password} </p>}
                </div>

                <div className="form-inputs">

                    <label htmlFor="password2" className='form-label'>
                        Confirm Password
</label>
                    <input id="password2" className="form-input" type="password" name="password2" placeholder="Re Enter Password"
                        // value={values.password2}
                        onChange={handlechange}
                    />
                    {errors.password2 && <p> {errors.password2} </p>}
                </div>

                <button className="form-input-btn" type="Submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    already have an account? Login <a href='./'>here</a>
                </span>
            </form>

        </div>
    )
    // return { values }
}

export default SignUpForm
