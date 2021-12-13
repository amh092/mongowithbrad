/* eslint-disable import/no-anonymous-default-export */
// auth reducer
// register success and register fail added to the action folder to types 


import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
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
      
      case USER_LOADED:
        return{
          ...state,
          // user : payload will bring user data 
          user: payload,
          isAuthenticated: true,
          loading:false
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
          ...state,
          ...payload,
          isAuthenticated : true,
          loading: false
        }
        
         case REGISTER_FAIL:
         case AUTH_ERROR:  
         case LOGIN_FAIL:
         case LOGOUT:
        localStorage.removeItem('token')
        return{
          ...state,
          token : null,
          isAuthenticated : false,
          loading: false
        };

        default:
          return state;
    }
  }

