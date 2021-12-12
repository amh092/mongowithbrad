/** in Redux, a reducer is a pure function that
    takes an action and the previous state of
    the application and returns the new state.
    The action describes what happened and it is 
    the reducer's job to return the new state 
    based on that action */
import {combineReducers} from 'redux';
import alert from './alert' // this was added to define the alerts 
import auth from './auth' // this was added to define the alerts 
export default combineReducers({alert,auth

})