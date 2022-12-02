// import {createStore} from 'redux'
// import allReducers from './Reducers'


// const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



// export default store;


import { configureStore } from '@reduxjs/toolkit'
import allReducers from './Reducers'

const store = configureStore({
    reducer: allReducers
})

export default store