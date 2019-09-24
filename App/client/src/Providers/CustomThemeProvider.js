import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
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
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
    MuiInputLabel: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: 'rgba(255, 255, 255, 0.64)',
        "&$focused": { // increase the specificity for the pseudo class
          color: "#aa00ff"
        }
      }
    }
  },
});

export default function CustomThemeProvider(props) {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}