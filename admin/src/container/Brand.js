import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBrand, addBrand,deleteBrand,editBrand,getChallenges,getTricks } from '../redux/Brand/BrandAcions'
import SignUpForm from '../components/SignUp/SignUpForm'
import FormSuccess from '../components/SignUp/FormSuccess'
import Auth from '../auth'
import Header from '../components/header/Header'
import BrandForm from '../components/Brand/BrandForm'

function Brand({ brandData, fetchBrand, addBrand, history,deleteBrand,editBrand,getChallenges,getTricks }) {

  const [isSumitted, setIsSubmitted] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isChallenge,setIsChallenge] = useState(false)
  const [isTrick,setIsTrick] = useState(false)
  // const token = localStorage.getItem("token")
  const [userData, setUserData] = useState({
    id: null,
    name:null,
    description:null
  })
  let BrandID=null
    function EditForm(data){ 
      editBrand(userData.id,data.name,data.description)
      setTimeout(function(){
      
      setIsSubmitted(false);
      setIsAdd(false);
      setIsEdit(false);
      },200);
    }
  function SubmitForm(data) {
   
    setIsSubmitted(true);
    setIsAdd(false);
    setIsEdit(false)
    // console.log("brand data",data.name,data.description)
    addBrand(data.name, data.description);
    setTimeout(function() {
      setIsSubmitted(false)
    }, 200);
    // setIsSubmitted(false);
  }

  function renderTableHeader() {
    return (<tr>
      <th scope="col">#</th>
      <th  scope="col">ID</th>
      <th  scope="col">NAME</th>
      <th  scope="col">DESCRIPTION</th>
      {/* <th  scope="col">EMAIL</th> */}
    </tr>)
 }

 function ChallengeHeader() {
  return <tr>
    <th scope="col">#</th>
    <th  scope="col">ID</th>
    <th  scope="col">NAME</th>
    <th  scope="col">DESCRIPTION</th>
    <th  scope="col">START_DATE</th>
    <th  scope="col">EXPIRY_DATE</th>
  </tr>
}
 function TrickHeader() {
  return <tr>
    <th  scope="col">#</th>
    <th  scope="col">CHALLENGE ID</th>
    <th  scope="col">SOLUTION</th>
    <th  scope="col">USER ID</th>
  </tr>
}

 function EditBrand(brandId){
  const SingleBrand = brandData.brands.filter((brand) =>{
    return brand.id === brandId
  })
    setUserData({id:SingleBrand[0].id,name:SingleBrand[0].name,description:SingleBrand[0].description})
    BrandID = brandId
    console.log(BrandID)
    if(!isSumitted)
    {setIsSubmitted(true);}
    if(isAdd)
      {setIsAdd(false);}

    setIsEdit(true)
 }

 function DeleteBrand(brandId){
   setIsSubmitted(true)
  //  console.log(brandId)
  deleteBrand(brandId)
  setTimeout(function() {
    setIsSubmitted(false)
  }, 200);

 }

 function GetTricks(challengeId){

  getTricks(challengeId)
  setTimeout(function() {
    setIsSubmitted(true)
    setIsChallenge(false)
    setIsTrick(true)
  }, 200);

 }
 function GetChallenges(brandId){

  getChallenges(brandId)
  setTimeout(function() {
    setIsSubmitted(true)
    setIsChallenge(true)
  }, 200);

 }
 function renderTableData() {
   console.log("brands",brandData.brands)
  return  brandData.brands.map((brand, index) => {
     const { id, name, description } = brand 
     return (
        <tr key={id}>
          <th scope="row"></th>
           <td style={{marginLeft :"0px"}}>{id}</td>
           <td style={{marginLeft :"0px"}}>{name}</td>
           <td style={{marginLeft :"0px"}}>{description}</td>
           {/* <td>{email}</td> */}
           <button className="btn btn-info" onClick={() =>GetChallenges(id)}>Challenges</button>
           <button className="btn btn-warning" onClick={() =>EditBrand(id)}>Edit</button>
           <button className="btn btn-danger"  onClick={()=>DeleteBrand(id)} >Delete</button>
        </tr>
     )
  })
}
 function challenges() {
  //  console.log("challenges",brandData.challenges)
  
  return  brandData.challenges.map((challenge, index) => {
     const {description,expiryDate, id, name, startDate } = challenge 
     return (
        <tr key={id}>
          <th scope="row"></th>
           <td>{id}</td>
           <td>{name}</td>
           <td>{description}</td>
           <td>{startDate}</td>
           <td>{expiryDate}</td>
           <button className="btn btn-info" onClick={() =>GetTricks(id)}>Tricks</button>
        </tr>
     )
  })
}
 function tricks() {
  //  console.log("challenges",brandData.challenges)
  
  return  brandData.tricks.map((trick, index) => {
     const {challengeID,data, id, isValid, userID } = trick
     let substr = '/';
    var baseURL = "http://192.168.99.28:420"
     if(data.includes(substr)){
      var res = baseURL.concat(data);
      return (
        <tr key={id}>
          <th scope="row"></th>
           <td>{challengeID}</td>
           <td  style={{width :"160px"}}  > <img  style={{width :"150px"}} src={res} alt="nothing"    />  </td>
           <td>{userID}</td>
        </tr>
     )   
     } 
     else{
     return (
        <tr key={id}>
          <th scope="row"></th>
           <td>{challengeID}</td>
           <td>{data}</td>
           <td>{userID}</td>
        </tr>
     )
     }
  })
}


  function BrandAddition() {
    if(isChallenge){
      setIsChallenge(false)
    }
    if(!isSumitted)
    {setIsSubmitted(true)}
    setIsAdd(true);
    if(isEdit)
    {setIsEdit(false);}
    if(isTrick)
    {setIsTrick(false)}
  }
  
  
  let Edit =  <div>  <BrandForm EditData={userData} submitForm={EditForm}> Edit </BrandForm> </div>
  let message
   = <div>
        <BrandForm   submitForm={SubmitForm}> Add </BrandForm>
    </div>
  let display = 
        <div className="container">
      <h2> Brand List <button style={{marginLeft :"370px"}} className="btn btn-primary" onClick={BrandAddition}> Add Brand </button> </h2>
    <div>
         <table className="table">
           <thread> 
        
         {renderTableHeader()}
       
         </thread>
         <tbody>
           <tr> 
            {renderTableData()}
            </tr>
         </tbody>
      </table>
    </div>
  </div>

  let trickData = 
  <div className="container">
<h2> Tricks List</h2>
<table className="table">
<thread>
<tr>
  {TrickHeader()}
</tr>
</thread>
<tbody>
  <tr>
    {tricks()}
  </tr>
</tbody>

</table>

  </div>
  
  let mychallenge = 
  <div className="container">
<h2> Challenges List </h2>
   <table className="table ">
     <thread> 
       <tr> 
     {ChallengeHeader()}
     </tr>
   </thread>
   <tbody>
     <tr> 
      {challenges()}
      </tr>
   </tbody>
</table>
</div>



  useEffect(() => {
    console.log(brandData.challenges)
    fetchBrand()
  },[isSumitted,isAdd,brandData.challenges])

 

  return (

    <div>
      <Header />
      {/* <button className="btn btn-primary" onClick={BrandAddition}> Add Brand </button> */}
      {!isSumitted && (display)}
      {isAdd && (message)}
      {isEdit && (Edit)}
      {isChallenge && (mychallenge)}
      {isTrick && (trickData)}
      {/* {console.log(brandData.challenges)} */}
      {/* <img src="http://192.168.99.28:420/Uploads/ChallengeID2userID7Toyota.jpg" alt="Nothing" /> */}
    </div>
  )
  }
const mapStateToProps = state => {

  return {
    brandData: state.brandData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchBrand: () => dispatch(fetchBrand()),
    addBrand: (name,description) => dispatch(addBrand({ name: name, description:description})),
    deleteBrand:(id) => dispatch(deleteBrand({id:id})),
    editBrand:(id,name,description) => dispatch(editBrand({id:id,name:name,description:description})),
    getChallenges:(id) => dispatch(getChallenges({id:id})),
    getTricks:(id) => dispatch(getTricks({id:id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)
