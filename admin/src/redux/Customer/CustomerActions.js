import {
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    POST_CUSTOMER_REQUEST,
    POST_CUSTOMER_SUCCESS,
    POST_CUSTOMER_FAILURE,
    DELETE_CUSTOMER,
    EDIT_CUSTOMER,
} from './CustomerTypes'
import axios from 'axios'

export const PostCustomerRequest = ()=>{
    return{
        type: POST_CUSTOMER_REQUEST
    }
}
export const PostCustomerSuccess = (data)=>{
    return{
        type: POST_CUSTOMER_SUCCESS,
        payload:data
    }
}
export const PostCustomerFaillure = (error)=>{
    return{
        type: POST_CUSTOMER_FAILURE,
        payload:error
    }
}

export const GetCustomerRequest = ()=>{
    return{
        type: GET_CUSTOMER_REQUEST
    }
}
export const GetCustomerSuccess = (data)=>{
    return{
        type: GET_CUSTOMER_SUCCESS,
        payload:data
    }
}
export const GetCustomerFailure = (error)=>{
    return{
        type: GET_CUSTOMER_FAILURE,
        payload:error
    }
}
export const DeleteCustomer = (data)=>{
    return{
        type: DELETE_CUSTOMER,
        payload:data
    }
}
export const EditCustomer = (data)=>{
    return{
        type: EDIT_CUSTOMER,
        payload:data
    }
}

export const AddCustomer= (data)=>{  // Thunk Middleware return another Function

    return (dispatch) =>{
        dispatch(PostCustomerRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const result = response.datas
            console.log(data)
            dispatch(PostCustomerSuccess(data))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(PostCustomerFaillure(errorMsg))
        })
    }
    }
    export const getCustomer= ()=>{  // Thunk Middleware return another Function

        return (dispatch) =>{
            dispatch(GetCustomerRequest)
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                const result = response.data
                console.log(result)
                dispatch(GetCustomerSuccess(result))
            })
            .catch(error=>{
                const errorMsg = error.message
                dispatch(GetCustomerFailure(errorMsg))
            })
        }
        }
