import axios from 'axios'
import { setAlert} from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// register user 
export const register = ({ name , email, password}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        },
  };

     const body = JSON.stringify({name,email,password});

    try {
        // saving the respond in res 
        const res = await axios.post(
            '/api/users',
            body,
            config
            );

        dispatch({
            /**  with actions ' is not used
             * for example REGISTER_SUCCESS IS OK 
             * 'REGISTER _SUCCESS it not OK because it has '' 
             * 
             *  */ 
            type:REGISTER_SUCCESS,
            payload: res.data,
        });
    }

    catch(err){
        const errors = err.response.data.errors;

        if(errors){ 
            errors.forEach(error => dispatch(setAlert(error.msg,'danger',2000)))
        }
        dispatch({
            type:REGISTER_FAIL
        });
    }
};
