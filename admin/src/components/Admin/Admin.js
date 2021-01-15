import React,{useState} from 'react'
import Login from '../Login/Login'
import Auth from '../../auth'
import axios from 'axios'
function Admin(props) {
    const [isSumitted, setIsSubmitted] = useState(false)
    const [myresponse,setMyResponse] = useState([])
    // const token = localStorage.getItem("")


    function SubmitForm(data) {

  
      console.log(data.username)
      console.log(data.password)
      axios.post('http://192.168.99.28:420/Auth/Login',{
        username: data.username,
        password: data.password,
        userType: 2
      },)
      .then(response =>{
        console.log(response.data.data)
        localStorage.setItem("token",response.data.data)
          setMyResponse(response.data.data)
          if(response.data.success)
          { 
            setIsSubmitted(true)}
      })
      .catch(error=>{
          const errorMsg = error.message
      })
   
        // console.log(myresponse)
      
        // addBrand(data.username, data.password);
        // setIsSubmitted(true)
      }

      let message = 
        <div>
        {!isSumitted ? (<Login  submitForm={SubmitForm} />) : (Auth.login(()=>{
            // console.log(myresponse)
            props.history.push("/brand")
        }))}
      </div>
    return (
        <div>
            
        <Login submitForm={SubmitForm}/>

        </div>
    )
}

export default Admin
