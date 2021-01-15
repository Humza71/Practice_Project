import React,{useState}  from 'react'
import './Form.css'
import { postForm } from './redux/Form/FormActions';
import {connect} from 'react-redux'
// import {postForm} from './redux/Form/FormActions'
const Form = ({postForm, Form}) => {
//  const Form = (props) => {
// useEffect( ()=>{
//   postForm()
// },[] )

const [email,setEmail]=useState('')
const [password,setPassword]= useState('')

// const [information,setInformation]=useState({
//   email:'',
//   password:''
// })

// const InputHandler = (event)=>{
// setInformation.email(event.target[0].value)
// setInformation.email(event.target[1].value)
// console.log(information.email,"Email")
// console.log(information.password,"Password")
// }

return (
    // <div className="container mb-2">  
    // <form action="!#">
    // {/* <div class="form-group">
    //   <label for="pwd">Name:</label>
    //   <input type="text" class="form-control" placeholder="Enter name" id="name"/>
    //   </div> */}
    // <div class="form-group">
    //   <label for="email">Email address:</label>
    //   <input type="email" class="form-control" placeholder="Enter email" id="email"/>
    // </div>
    // <div class="form-group">
    //   <label for="pwd">Password:</label>
    //   <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
    //   </div>
   

    // <button type="submit" class="btn btn-primary">Sign In</button>
    //   </form>

    //  </div>

    <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 login-section-wrapper">
        {/* <div class="brand-wrapper">
          <img src="images/logo.svg" alt="logo" class="logo" />
        </div> */}
        <div class="login-wrapper my-auto">
          <h1 class="login-title">Log in</h1>
          <form  onSubmit={(e)=>{
            e.preventDefault();
            // console.log(email,"email")
            // console.log(password,"password")
            postForm(email,password);
          }}>
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
            <button name="login" id="login" class="btn btn-block login-btn" type="submit" value="Login"
            >
              LogIn
              </button>
          </form>
          <a href="#!" class="forgot-password-link">Forgot password?</a>
          <p class="login-wrapper-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        </div>
      </div>
      {/* <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="images/login.jpg" alt="login image" class="login-img"/>
      </div> */}
    </div>

          {/* {s
             Form.data.map(({name = ''})=> <p> {name} </p> )          
          } */}

  </div>

    );
}

const mapStateToProps = state =>{
  return{
    Form: state.Form
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    postForm:(email,password)=>dispatch(postForm({Email:email,Password:password}))
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(Form)
//export default Form