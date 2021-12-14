//---------imports stuff section ----------------
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//-------importing components --------------// 
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
//import stylesheet
import './App.css';
// -----------------import redux stuff ----------------// 
// Provider will connect react app to redux because react and redux are not the same 
import {Provider} from 'react-redux'
import store from './store'
//import alert 
import Alert from './components/layouts/Alert'
 // /**downgrade to react dom npm i react-router-dom@5.3.0
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
//---------------------------end of importing stuff -------------// 

 if (localStorage.token){
   setAuthToken(localStorage.token)
 }
const App = () => {
 
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  return(
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
  
      <section className='container'>
        <Alert/>
        <Switch>
         <Route path='/register' component={Register}/>
         <Route path='/login' component={Login}/>
         <PrivateRoute path='/dashboard' component={Dashboard}/>
        </Switch>
      </section>

    </Fragment>
  </Router>
  </Provider>
)};
export default App;