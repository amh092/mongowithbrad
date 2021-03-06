// use control + D then change all class name 
import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'



const Navbar = ({ auth:{isAuthenticated,loading}, logout})=> {
  const authLinks = (
    <ul>
    <li><Link onClick={logout} to="/">
    <i className="fas fa-sign-out-alt"/>{}
    
       {"      "}Log out </Link></li>
  
  </ul>
  );
  const guestLinks =(
    <ul>
    <li><a href="profiles.html">Developers</a></li>
    <li><Link to="register">Register</Link></li>
    <li><Link to="login">Login</Link></li>
  </ul>
   );
    return (
        <nav className="navbar bg-dark">
        <h1>
        {/**use link from react router and to */}
          <Link to="/">
          <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
     {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
      </nav>
    );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps,{logout})(Navbar)
