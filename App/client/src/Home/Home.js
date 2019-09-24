import React, { Component } from 'react';
import MainNavbar from '../Components/MainNavbar';
import '../css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from '../Components/Test';
import Test2 from '../Components/Test2';
import AboutUs from '../Components/AboutUs';
import ContentContainer from '../Components/ContentContainer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Login from '../Components/Login';
import Register from "../Components/Register";
import ForgotPassword from "../Components/ForgotPassword";


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#212121',
      contrastText: '#fff'
    },
    secondary: {
      main: '#aa00ff',
      contrastText: '#fff'
    },
    contrastText: "#fff",
    iconColor: {
      color: "#fff"
    }
  }
});

export default class Home extends Component {
  // https://material-ui.com/styles/api/ 
  // Implement ThemeProvider
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <MainNavbar />
          <ContentContainer contentRight={<p>Optional Content right side here</p>}>
            <Switch>
              <Route exact path="/" component={Test} />}/>
              <Route path="/test" component={Test2} />} />
              <Route path="/about-us" component={AboutUs}/>} />
              <Route path="/login" component={Login}/>} />
              <Route path="/register" component={Register}/>} />
              <Route path="/forgot-password" component={ForgotPassword}/>} />
            </Switch>
          </ContentContainer>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}