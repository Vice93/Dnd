import React, { Component } from 'react';
import MainNavbar from '../Components/MainNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from '../Components/Test';
import Test2 from '../Components/Test2';

class Home extends Component {

  render(){
    return(
      <div>
        <MainNavbar />
        
        <Router>
          <div className="main-content">
            <Route exact path="/" component={Test2} />
            <Route path="/test" component={Test} />
          </div>
        </Router>
        
      </div>
    )
  }
}

export default Home;