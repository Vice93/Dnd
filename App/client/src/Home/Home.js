import React, { Component } from 'react';
import MainNavbar from '../Components/MainNavbar';
import '../css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from '../Components/Test';
import Test2 from '../Components/Test2';
import AboutUs from '../Components/AboutUs';

class Home extends Component {
// https://material-ui.com/styles/api/ 
// Implement ThemeProvider
  render(){
    return(
      <div>
        <BrowserRouter>
          <MainNavbar />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Test} />}/>
              <Route path="/test" component={Test2} />} />
              <Route path="/about-us" component={AboutUs}/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home;