import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import { CheckCircle, Info, Warning, Close } from '@material-ui/icons'
import ErrorIcon from '@material-ui/icons/Error'
import { amber, green, red, indigo } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const snackbarIcons = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info,
};

const snackbarStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[700],
  },
  info: {
    backgroundColor: indigo[800],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: 5
  }
}));

const fullSpinner = {
  display: 'flex',
  marginTop: '3em',
  fontSize: '4em'
}

const spinner = {
  margin: 'auto'
}

const SnackBarWrapper = (props) => {
  const classes = snackbarStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = snackbarIcons[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.snackbarIcons)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <Close className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

SnackBarWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

let openSnackbarFn;

export const CustomSnackbar = () => {
  const [state= { open: false, variant: 'info', message: ''}, setState] = React.useState()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setState({ open: false, variant: 'info', message: ''})
  }

  const openSnackbar = (variant, message) => {
    setState({ open: true, variant: variant, message: message})
  }

  
  openSnackbarFn = openSnackbar

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={state.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackBarWrapper
        onClose={handleClose}
        variant={state.variant} //success || error || warning || info
        message={state.message}
      />
    </Snackbar>
  )
}

export const openSnackbar =(variant, message) => {
  openSnackbarFn(variant, message)
}


export const Spinner = (props) => {
  return (
    <CircularProgress size={props.size} style={spinner} color="secondary" />
  )
}

export const FullPageSpinner = () => {
  return (
    <div style={fullSpinner}>
      <Spinner size={200} />
    </div>
  )
}