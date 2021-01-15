import {FETCH_BRAND_REQUEST,
     FETCH_BRAND_SUCCESS,
     FETCH_BRAND_FAILURE,
     POST_BRAND_REQUEST,
     POST_BRAND_SUCCESS,
     POST_BRAND_FAILURE,
     GET_CHALLENGES_SUCCESS,
     GET_CHALLENGES_FAILURE,
     GET_TRICKS_SUCCESS,
     GET_TRICKS_FAILURE
    // DELETE_BRAND_REQUEST,
    // DELETE_BRAND_SUCCESS,
    // DELETE_BRAND_FAILURE,
    // EDIT_BRAND_REQUEST,
    // EDIT_BRAND_SUCCESS,
    // EDIT_BRAND_FAILURE
}
     from './BrandTypes'


const initialState = {
    loading:false,
    brands:[],
    challenges:[],
    tricks:[],
    error: '',
    status:null
    }

    const BrandReducer = (state = initialState,action)=>{
        
        switch(action.type){
            case FETCH_BRAND_REQUEST:
                return{
                    ...state,
                    loading:true
                }
                
            case FETCH_BRAND_SUCCESS:
                // console.log(action.playload)
                return{
                    ...state,
                    loading:false,
                    brands:action.payload,
                    error: ''
                }    
            case FETCH_BRAND_FAILURE:
                return{
                    loading:false,
                    brands:[],
                    error:action.payload
                }    
            case POST_BRAND_REQUEST:
                return{
                    ...state,
                    loading:true
                }    
            case POST_BRAND_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    status:action.payload,
                    error: ''
                }    
            case POST_BRAND_FAILURE:
                return{
                    loading:false,
                    brands:[],
                    error:action.payload
                }    
            case GET_CHALLENGES_SUCCESS:
                console.log(action.payload) 
                return{
                    ...state,
                    loading:false,
                    challenges:action.payload,
                    error:''
                }    
            case GET_CHALLENGES_FAILURE:
                return{
                    ...state,
                    loading:false,
                    challenges:[],
                    error:action.payload
                }
                
            case GET_TRICKS_SUCCESS:
                console.log(action.payload) 
            
                return{
                    ...state,
                    loading:false,
                    tricks:action.payload,
                    error:''
                }
            case GET_TRICKS_FAILURE:
                return{
                    ...state,
                    loading:false,
                    tricks:[],
                    error:action.payload    
                    
                }    
            
                
            default: return state    
        }
    }

    export default BrandReducer