import React, { Component } from 'react';
import MainNavbar from '../Components/MainNavbar';
import '../css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from '../Components/Test';
import Test2 from '../Components/Test2';
import AboutUs from '../Components/AboutUs';
import Login from '../Components/Login';
import Register from "../Components/Register";
import ForgotPassword from "../Components/ForgotPassword";
import CustomThemeProvider from '../Providers/CustomThemeProvider';

export default class Home extends Component {
  render() {
    return (
      <CustomThemeProvider>
        <BrowserRouter>
          <MainNavbar />
          <Switch>
            <Route exact path="/" component={Test} />
            <Route path="/test" component={Test2} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </BrowserRouter>
      </CustomThemeProvider>
    )
  }
}