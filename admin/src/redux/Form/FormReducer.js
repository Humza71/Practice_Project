import { POST_FORM_FAILURE, POST_FORM_REQUEST, POST_FORM_SUCCESS } from "./FormTypes"
//import React from 'react'


const initialState = {
loading:false,
data:[],
error: ''
}

const FormReducer = (state = initialState,action)=>{
    switch(action.type){
        case POST_FORM_REQUEST:
            return{
                ...state,
                loading:true
            }
        case POST_FORM_SUCCESS:
            // console.log("ye ha password",action.payload.Password)
            // console.log("ye ha email",action.payload.Email)
            // console.log("Password", action.payload.Email)
            // console.log("Email", action.payload.Password)
            // console.log("data",action.payload.name)
            return{
                ...state,
                loading:false,
                data:action.payload,
                error: ''
            }    
        case POST_FORM_FAILURE:
            return{
                loading:false,
                data:[],
                error:action.payload
            }    
        default: return state    
    }
}

export default FormReducer