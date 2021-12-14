/* eslint-disable import/no-anonymous-default-export */
import { PROFILE_ERROR
    , GET_PROFILE } from "../actions/types";




const initialState = {
    profile: null,
    profiles: [],
    repos:[],
    loading: true,
    errors:{}
}

 export default function (state = initialState, action ) {
     const {type,payload}= action;

     switch(type){
         case GET_PROFILE:
         return{
                ...state,
                profile:payload,
                loading: false
         }
         case PROFILE_ERROR: 
         return{
             ...state,
             console: payload,
             loading:false
         }

         default:
             return state;
     }
     
 }