import {
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    POST_CUSTOMER_REQUEST,
    POST_CUSTOMER_SUCCESS,
    POST_CUSTOMER_FAILURE,
    DELETE_CUSTOMER,
    EDIT_CUSTOMER
} from './CustomerTypes'


const initialState = {
    loading: false,
    data: [],
    error: ''
}

const CustomerReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_CUSTOMER_SUCCESS:
            console.log("ye ha password",action.payload.Password)
            console.log("ye ha email",action.payload.Email)
            console.log("ye ha Name",action.payload.Name)
            console.log("ye ha ConfirmPassword",action.payload.Password2)
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case POST_CUSTOMER_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        case GET_CUSTOMER_REQUEST:
            return {
                loading: true,
                data: [],
            }
        case GET_CUSTOMER_SUCCESS:
            console.log("Data A gia Customer")
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case GET_CUSTOMER_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case DELETE_CUSTOMER:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case EDIT_CUSTOMER:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state
    }

}



export default CustomerReducer