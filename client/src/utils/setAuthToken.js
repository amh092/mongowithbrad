import axios from 'axios'

// making global header  

// token here is a parameter 
// this will save the token instead of making many requests 
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}


export default setAuthToken