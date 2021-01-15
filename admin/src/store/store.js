import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevttools} from 'redux-devtools-extion'
import rootReducer from '../redux/rootreducer'


const store = createStore(rootReducer,composeWithDevttools(applyMiddleware(thunk)))

export default store