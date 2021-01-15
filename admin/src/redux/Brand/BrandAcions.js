import{
    FETCH_BRAND_FAILURE,
    FETCH_BRAND_REQUEST,
    FETCH_BRAND_SUCCESS,
    POST_BRAND_REQUEST,
    POST_BRAND_SUCCESS,
    POST_BRAND_FAILURE,
    GET_CHALLENGES_REQUEST,
    GET_CHALLENGES_SUCCESS,
    GET_CHALLENGES_FAILURE,
    GET_TRICKS_REQUEST,
    GET_TRICKS_SUCCESS,
    GET_TRICKS_FAILURE
    // DELETE_BRAND_REQUEST,
    // DELETE_BRAND_SUCCESS,
    // DELETE_BRAND_FAILURE,
    // EDIT_BRAND_REQUEST,
    // EDIT_BRAND_SUCCESS,
    // EDIT_BRAND_FAILURE
} from './BrandTypes'

import axios from 'axios'
//import axios from 'axios'

export const FetchBrandRequest = ()=>{
    return{
        type: FETCH_BRAND_REQUEST
    }
}
export const FetchBrandSuccess = brands=>{
    return{
        type: FETCH_BRAND_SUCCESS,
        payload: brands
    }
}
export const FetchBrandFailure =error=>{
    return{
        type: FETCH_BRAND_FAILURE,
        payload:error
    }
}

export const PostBrandRequest = ()=>{
    return{
        type: POST_BRAND_REQUEST
    }
}
export const PosthBrandSuccess = (brands)=>{
    return{
        type: POST_BRAND_SUCCESS,
        payload: brands
    }
}
export const PostBrandFailure = (error)=>{
    return{
        type: POST_BRAND_FAILURE,
        payload: error
    }
}
export const GetChallengesSuccess = (Challenges)=>{
    return{
        type: GET_CHALLENGES_SUCCESS,
        payload: Challenges
    }
}
export const GetChallengesFailure = (error)=>{
    return{
        type: GET_CHALLENGES_FAILURE,
        payload: error
    }
}
export const GetTricksSuccess = (tricks)=>{
    return{
        type: GET_TRICKS_SUCCESS,
        payload: tricks
    }
}
export const GetTricksFailure = (error)=>{
    return{
        type: GET_TRICKS_FAILURE,
        payload: error
    }
}

// export const DeleteBrandSuccess = ()=>{
//     return{
//         type: DELETE_BRAND_SUCCESS,
//     }
// }
// export const DeleteBrandFailure = (error)=>{
//     return{
//         type: POST_BRAND_FAILURE,
//         payload: error
//     }
// }
// export const DeleteBrandRequest = (error)=>{
//     return{
//         type: DELETE_BRAND_REQUEST,
//         payload: error
//     }
// }

export const fetchBrand= () =>{  // Thunk Middleware return another Function

    return (dispatch) =>{
        const token = localStorage.getItem("token")
        console.log(token)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: 'React POST Request Example' })
        //};
        dispatch(FetchBrandRequest)
        axios.get(`http://192.168.99.28:420/api/Brand?page=${1}&pageSize=${20}`
        ,{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          }
        )
        .then(response =>{
            const result = response.data.data
            console.log("Hamza",result)
            dispatch(FetchBrandSuccess(result))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(FetchBrandFailure(errorMsg))
        })
        
    }

}
export const getTricks= (data) =>{  // Thunk Middleware return another Function

    return (dispatch) =>{
        const token = localStorage.getItem("token")
        // console.log(token)
        axios.get(`http://192.168.99.28:420/api/Challenge/TricksByChallenge/${data.id}`
        ,{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          }
        )
        .then(response =>{
            const result = response.data.data.trick
            console.log("Hamza",result)
          
            dispatch(GetTricksSuccess(result))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(GetTricksFailure(errorMsg))
        })
        
    }

}
export const addBrand= (data)=>{  // Thunk Middleware return another Function

    return (dispatch) =>{
        const token = localStorage.getItem("token")
        console.log("add brand",data)
        
        dispatch(PostBrandRequest)
        axios.post(`http://192.168.99.28:420/api/Brand`,{
            name:data.name,
            description:data.description
        },{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
        .then(response =>{
            const result = response.data
            
            // console.log(result)
           
            dispatch(PosthBrandSuccess(data))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(PostBrandFailure(errorMsg))
        })
    }
    // return async (dispatch) =>{
    //     console.log('fetchBrand')
    //     dispatch(FetchBrandRequest())
    //     try{
    //       const res =   await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
          
    //       dispatch(FetchBrandSuccess(res));
    //     }
    //     catch(err){
    //         throw new Error(err);
    //     }
    // }
    
    }
    export const deleteBrand= (data) =>{  // Thunk Middleware return another Function

        return (dispatch) =>{
            const token = localStorage.getItem("token")
            console.log(token)
            dispatch(FetchBrandRequest)
            axios.delete(`http://192.168.99.28:420/api/Brand/${data.id}`
            ,{
                headers: {
                  'Authorization': `Bearer ${token}` 
                }
              }
            )
            .then(response =>{
                const result = response.data.data
                console.log("delete result",result)
                // dispatch(fetchBrand)
                // dispatch(FetchBrandSuccess(result))
            })
            .catch(error=>{
                const errorMsg = error.message
                dispatch(FetchBrandFailure(errorMsg))
            })
            
        }
    
    }
    export const editBrand= (data) =>{  // Thunk Middleware return another Function

        return (dispatch) =>{
            const token = localStorage.getItem("token")
            console.log(token)
            dispatch(FetchBrandRequest)
            axios.put(`http://192.168.99.28:420/api/Brand/?id=${data.id}`
            ,{
                name:data.name,
                description:data.description
            },{
                headers: {
                    'Authorization': `Bearer ${token}` 
                  }
            })
            .then(response =>{
                const result = response.data.data
                console.log("delete result",result)
            })
            .catch(error=>{
                const errorMsg = error.message
                dispatch(FetchBrandFailure(errorMsg))
            })
            
        }
    
    }

    export const getChallenges= (data) =>{  // Thunk Middleware return another Function

        return (dispatch) =>{
            const token = localStorage.getItem("token")
            console.log(token)
            dispatch(FetchBrandRequest)
            axios.get(` http://192.168.99.28:420/api/Brand/challengesByID/${data.id}`
            ,{
                headers: {
                  'Authorization': `Bearer ${token}` 
                }
              }
            )
            .then(response =>{
                const result = response.data.data.challenge
                // console.log("Challenges result",result)
              
                // dispatch(fetchBrand)
                dispatch(GetChallengesSuccess(result))
            })
            .catch(error=>{
                const errorMsg = error.message
                dispatch(GetChallengesFailure(errorMsg))
            })
            
        }
    
    }
