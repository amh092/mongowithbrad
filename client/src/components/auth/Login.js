import React,{Fragment , useState} from 'react'
// test sending data to database before using redux 

import {Link, Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'



  const Login = ({login , isAuthenticated}) => {
     /**here will be the state for registering new users  */
     const [formData,setFormData] = useState({
         /** default values initial state  */
       
        'email':'',
        'password':'',
    
        });

        /** destructuring instead of 
            formData.name 
            formData.email 
            formData.password
            formData.password2
        */
        /** calling setForm data to update the state of formData */
        const { email,password} = formData;

        /**const on change data to change the formData state */
        /**Now the problem with this is if I if I use this on change in any other field, it's always going to

edit the name because I use that name  as a key. >>>>>> 
    const onChange = e => setFormData({...formData, name:e.target.value})
*/
    
        const onChange = e => setFormData({...formData,[e.target.name]: e.target.value})
        const onSubmit =  async e =>  {
            e.preventDefault(); 
              login(email,password)
                   ;
        }
       // redirect 
       if(isAuthenticated === true) {
         return <Redirect to="/dashboard/"/>
       }     
        else if(!isAuthenticated) {
          <Redirect to="/"/>
        }
    return (
        <Fragment>
        <h1 className="large text-primary">Login </h1>
        <p className="lead"><i className="fas fa-user"></i> Login into your account</p>
        <form className="form" onSubmit={e =>onSubmit(e)}>
          <div className="form-group">
            <input type="email" 
            placeholder="Email Address" 
            name="email" 
            value={email}
            onChange={e => onChange(e)}
            required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
              required
            />
          </div>
   
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't  have an account? <Link to="register">Sign UP</Link>
        </p>
        </Fragment>
    );
  
};

Login.propTypes ={ 
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)