import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {AddCustomer,getCustomer} from '../redux/Customer/CustomerActions'
import FormSuccess from '../components/SignUp/FormSuccess';
import  SignUpForm from '../components/SignUp/SignUpForm'
import Auth from '../auth'
import Header from '../components/header/Header';
function Customer({Customer,AddCustomer,getCustomer,history}) {
  let display=""
    const [isSumitted, setIsSubmitted] = useState(false)
    const [userData, setUserData] = useState({
      id: null,
      name:null,
      username:null,
      email:null
    })
    // const [isAdd, setIsAdd] = useState(false)
    function SubmitForm(data) {
        setIsSubmitted(true);
        AddCustomer(data.username, data.email, data.password, data.password2);
    }
    useEffect(() => {
      getCustomer()
    },[])

    function CustomerAddition(){
      
    }

    return (
        <div> 
          <Header />
          <button onClick={CustomerAddition}> Add Customer </button>
          {/* <button 
            onClick={()=>{
                Auth.logout(()=>{
                    history.push("/")
                })
            }}
            > Logout </button> */}
            <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
            </div>
            {!isSumitted ? (<SignUpForm  myData={userData} submitForm={SubmitForm} />) : ( <FormSuccess />  )}
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
      AddCustomer:(name,email,password,password2)=>dispatch(AddCustomer({Name:name,Email:email,Password:password,Password2:password2})),
      getCustomer:()=>dispatch(getCustomer())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Customer)
