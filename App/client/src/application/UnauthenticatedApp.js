import React, { Component } from 'react'
import MainNavbar from '../components/MainNavbar'
import '../css/main.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutUs from '../components/AboutUs'
import Login from '../components/Login'
import Register from "../components/Register"
import ForgotPassword from "../components/ForgotPassword"
import LandingPage from '../components/LandingPage'
import CustomThemeProvider from '../providers/CustomThemeProvider'
import NotFound from '../components/NotFound'

export default class Home extends Component {
  render() {
    return (
      <CustomThemeProvider>
        <BrowserRouter>
          <MainNavbar isLoggedIn={false} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route default component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </CustomThemeProvider>
    )
  }
}