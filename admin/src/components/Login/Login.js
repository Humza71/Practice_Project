import React from 'react'
import userForm from './UserForm'
import Validate from './ValidateInfo'
function Login(props) {

    const { handlechange, values, handleSubmit, errors } = userForm({ handler, Validate });

    function handler() {

        console.log("In Handler")
        props.submitForm(values)
    }

    return (
        <div className="form-container">
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
                        value={values.username}
                        onChange={handlechange}
                    />
                    {errors.username && <p> {errors.username} </p>}
                </div>

                <div className="form-inputs">

                    <label htmlFor="password" className='form-label'>
                        password
                    </label>
                    <input id="password"
                        className="form-input"
                        type="password" name="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handlechange}
                    />
                    {errors.password && <p> {errors.password} </p>}
                </div>

                <button className="form-input-btn" type="Submit">
                    Sign In
                </button>
                </form>
                </div>   </div>
    )
}

export default Login
