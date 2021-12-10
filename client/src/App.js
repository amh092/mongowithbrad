import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';
 // /**downgrade to react dom npm i react-router-dom@5.3.0
const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <section className='container'>
        <Switch>
         <Route path='/register' component={Register}/>
         <Route path='/login' component={Login}/>
        </Switch>
      </section>

    </Fragment>
  </Router>
);
export default App;