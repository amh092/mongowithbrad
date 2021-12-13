import axios from 'axios'
import {
    setAlert
} from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

// import auth token 

import setAuthToken from '../utils/setAuthToken';
// LOAD USER 
//async function because it is promise 
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch {

        dispatch({
            type: AUTH_ERROR
        })

    }
}

// register user 
export const register = ({
    name,
    email,
    password
}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const body = JSON.stringify({
        name,
        email,
        password
    });

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
             * 'REGISTER _SUCCESS' it not OK because it has parentheses  ''
             *  */
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 2000)))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// login user
export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const body = JSON.stringify({
        email,
        password
    });

    try {
        // saving the respond in res 
        const res = await axios.post(
            '/api/auth',
            body,
            config
        );

        dispatch({
            /**  with actions ' is not used
             * for example REGISTER_SUCCESS IS OK 
             * 'REGISTER _SUCCESS' it not OK because it has parentheses  ''
             *  */
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 2000)))
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// logout 

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
};