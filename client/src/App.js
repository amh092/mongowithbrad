import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';
// redux 
//import provider
// Provider will connect react app to redux because react and redux are not the same 
import {Provider} from 'react-redux'
import store from './store'
//import alert 
import Alert from './components/layouts/Alert'
 // /**downgrade to react dom npm i react-router-dom@5.3.0
const App = () => (
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
        </Switch>
      </section>

    </Fragment>
  </Router>
  </Provider>
);
export default App;