import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const themeKey = '__dnd_theme__'
const defaultTheme = 'white'
const variantTheme = 'black'

const darkTheme = createMuiTheme({
  spacing: 2,
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
    },
    MuiSvgIcon: {
      root: {
        color: '#fff'
      }
    },
    MuiTypography: {
      root: {
        color: '#fff'
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#303030'
      }
    },
    MuiMenu: {
      paper: {
        backgroundColor: '#303030'
      }
    },
    MuiCard: {
      root: {
        backgroundColor: '#303030'
      }
    },
    MuiCardContent: {
      root: {
        color: '#fff'
      }
    }
  },
});

const whiteTheme = createMuiTheme({
  spacing: 2,
  palette: {
    type: "light",
    primary: {
      main: '#6200EE',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#03DAC6',
      contrastText: '#000'
    },
    contrastText: "#000",
    iconColor: {
      color: "#000"
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
    MuiButton: {
      root: {
        color: '#fff'
      }
    }
  },
});

export default function CustomThemeProvider(props) {
  const savedTheme = getTheme()
  const [theme, setTheme] = React.useState(savedTheme)

  const toggleTheme = () => {
    let t = window.localStorage.getItem(themeKey)
    let isWhite = t === defaultTheme
    isWhite ? setTheme(darkTheme) : setTheme(whiteTheme)
    window.localStorage.setItem(themeKey, isWhite ? variantTheme : defaultTheme)
  }

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      toggleTheme
    })
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

const getTheme = () => {
  let themeValue = window.localStorage.getItem(themeKey);

  if (themeValue == null) {
    themeValue = defaultTheme
    window.localStorage.setItem(themeKey, themeValue)
  }

  return themeValue === defaultTheme ? whiteTheme : darkTheme
}