import {combineReducers} from 'redux'
import Brand from './Brand/BrandReducer'
import FormReducer from './Form/FormReducer'
import CustomerReducer from './Customer/CustomerReducer'
// import {reducer as FormReducer} from 'redux-form'
const rootReducer = combineReducers({
    brandData:Brand,
    Form:FormReducer,
    Customer:CustomerReducer
})

export default rootReducer