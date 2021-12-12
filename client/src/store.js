// this is used for redux state 

/**Redux Thunk is a middleware that allows you to call the action creators that return
  a function(thunk) which takes the store's dispatch method as the argument and which is afterwards used to 
 dispatch the synchronous action after the API or side effects has been finished. */ 
import thunk  from 'redux-thunk'
// applyMiddleware is imported to be used with thunk redux  
import {createStore,applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/index'

// creating store 

const initialState ={};

const middleware = [thunk];


/**  store take three parameters
 1- root reducer
 2-  initial state 
 3- middleware

*/
const store = createStore(
    rootReducer,
    initialState,
    //middleware
    composeWithDevTools(applyMiddleware(...middleware))

)
 
export default store;