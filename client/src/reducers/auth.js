/* eslint-disable import/no-anonymous-default-export */
// auth reducer
// register success and register fail added to the action folder to types 


import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  // creating the initial state fro authentication 
  const initialState = {
      // the token is save in client side in local storage 
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  }
  
  export default function(state = initialState, action)  {
    const {type,payload} = action;

    switch(type){
      case REGISTER_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
          ...state,
          ...payload,
          isAuthenticated : true,
          loading: false
        }
        
         case REGISTER_FAIL:
        localStorage.removeItem('token')
        return{
          ...state,
          token : null,
          isAuthenticated : true,
          loading: false
        };

        default:
          return state;
    }
  }