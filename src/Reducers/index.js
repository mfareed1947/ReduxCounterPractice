import counterReducer from "./counter";
import isloggedReducer from "./islogged";
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counterReducer,
    isloggedReducer
})

export default allReducers;