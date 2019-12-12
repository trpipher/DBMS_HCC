import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import AddMemberPage from './pages/AddMemberPage';
import AddProductPage from './pages/AddProductPage';

class App extends Component{
  render(){
    return <Router>
      <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/AddMember' component={AddMemberPage}/>
        <Route exact path='/AddProduct' component={AddProductPage}/>
      </Switch>
    </Router>
  }
}

export default App;
