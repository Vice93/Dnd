import React, { Component } from 'react'
import MainNavbar from '../components/MainNavbar'
import '../css/main.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Test from '../components/Test'
import Test2 from '../components/Test2'
import AboutUs from '../components/AboutUs'
import LandingPage from '../components/LandingPage'
import CustomThemeProvider from '../providers/CustomThemeProvider'
import NotFound from '../components/NotFound'

export default class Home extends Component {
  render() {
    return (
      <CustomThemeProvider>
        <BrowserRouter>
          <MainNavbar isLoggedIn={true} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/path" component={Test} />
            <Route path="/test" component={Test2} />
            <Route path="/about-us" component={AboutUs} />
            <Route default component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </CustomThemeProvider>
    )
  }
}