import React,{Fragment , useState} from 'react'
// test sending data to database before using redux 

// this used to connect react to redux 
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

 const Register = ({setAlert , register}) => {
     /**here will be the state for registering new users  */
     const [formData,setFormData] = useState({
         /** default values initial state  */
        'name':'',
        'email':'',
        'password':'',
        'password2':'' 
        });

        /** destructuring instead of 
            formData.name 
            formData.email 
            formData.password
            formData.password2
        */
        /** calling setForm data to update the state of formData */
        const { name,email,password,password2} = formData;

        /**const on change data to change the formData state */
        /**Now the problem with this is if I if I use this on change in any other field, it's always going to

edit the name because I use that name  as a key. >>>>>> 
    const onChange = e => setFormData({...formData, name:e.target.value})
*/
    
        const onChange = e => setFormData({...formData,[e.target.name]: e.target.value})
        const onSubmit =  async e =>  {
            e.preventDefault(); 
                if(password !== password2){
                   setAlert('password do not match ','danger',1000)
                }
                else{
                   register({name,email,password})

                } 
        }
    return (
        <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e =>onSubmit(e)}>
          <div className="form-group">
            <input 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input 
            placeholder="Email Address" 
            name="email" 
            value={email}
            onChange={e => onChange(e)}
            />
            <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="login">Sign In</Link>
        </p>
        </Fragment>
    )
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default connect(null,{setAlert,register})(Register)