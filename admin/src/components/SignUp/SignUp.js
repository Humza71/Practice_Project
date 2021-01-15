import React,{useState} from 'react'
import {connect} from 'react-redux'
import {AddCustomer} from '../../redux/Customer/CustomerActions'
function SignUp({AddCustomer,children}) {
const [name,setName]= useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmpassword,setConfirmPassword] = useState('')
    return (
        <div>
            <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 login-section-wrapper">

        <div class="login-wrapper my-auto">
          <h1 class="login-title">{children}</h1>
          <form  onSubmit={(e)=>{
            e.preventDefault();
            // console.log(email,"email")
            // console.log(password,"password")
            AddCustomer(name,email,password,confirmpassword);
          }}>
               <div class="form-group">
              <label for="name">Name</label>
              <input type="text" value ={name} name="name" id="name" class="form-control" placeholder="Name" 
              onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" value ={email} name="email" id="email" class="form-control" placeholder="email@example.com" 
              onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="form-group mb-4">
              <label for="password">Password</label>
              <input type="password" value ={password} name="password" id="password" class="form-control" placeholder="enter your passsword"
              onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div class="form-group mb-4">
              <label for="password">Confirm Passowrd</label>
              <input type="password" value ={confirmpassword} name="password2" id="password2" class="form-control" placeholder="Confirm passsword"
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              />
            </div>
            <button name="login" id="login" class="btn btn-block login-btn" type="submit" value="Login"
            >
             {children}
              </button>
          </form>
          <a href="#!" class="forgot-password-link">Forgot password?</a>
          <p class="login-wrapper-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        </div>
      </div>
     
    </div>

  </div>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
      Customer: state.data
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
      AddCustomer:(name,email,password,confirmpassword)=>dispatch(AddCustomer({Name:name,Email:email,Password:password,ConfirmPassword:confirmpassword}))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
