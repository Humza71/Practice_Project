import{
    POST_FORM_FAILURE,
    POST_FORM_REQUEST,
    POST_FORM_SUCCESS
} from './FormTypes'
import axios from 'axios'

export const PostFormRequest = ()=>{
    return{
        type: POST_FORM_REQUEST
    }
}
export const PostFormSuccess = users=>{
    return{
        type: POST_FORM_SUCCESS,
        payload: users
    }
}
export const PostFormFailure =error=>{
    return{
        type: POST_FORM_FAILURE,
        payload:error
    }
}

export const postForm= (data)=>{  // Thunk Middleware return another Function

return (dispatch) =>{
    dispatch(PostFormRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        const result = response.data
        // console.log("Password", Password)
        // console.log("Email", Email)
        dispatch(PostFormSuccess(data))
    })
    .catch(error=>{
        const errorMsg = error.message
        dispatch(PostFormFailure(errorMsg))
    })
}
}
