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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      main: '#aa00ff',
      light: '#e254ff',
      dark: '#7200ca',
      contrastText: '#fff'
    },
    contrastText: "#fff",
    background: {
      default: "#484848",
      paper: "#484848"
    },
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
            </Switch>
          </ContentContainer>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}