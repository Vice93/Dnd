import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { IconButton, Snackbar, SnackbarContent, ListItem, ListItemIcon, 
  ListItemText, Container, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core'
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

/**
 * The snackbar definition. Must be included at a top-level component for the snackbar to persist state changes.
 */
export const CustomSnackbar = () => {
  const [state = { open: false, variant: 'info', message: '' }, setState] = React.useState()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setState({ open: false, variant: 'info', message: '' })
  }

  const openSnackbar = (variant, message) => {
    setState({ open: true, variant: variant, message: message })
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

/**
 * 
 * @param {string} variant The type of snackbar to open. Available options are: 'success', 'info', 'warning', 'error'
 * @param {*} message The message to display in the snackbar
 * 
 * Opens a snackbar with the specified settings.
 */
export const openSnackbar = (variant, message) => {
  openSnackbarFn(variant, message)
}

/**
 * 
 * @param {number} size The size of the spinner
 * 
 * Displays a spinner of the desired size. Default size 40
 */
export const Spinner = ({ size }) => {
  return (
    <CircularProgress size={size} style={spinner} color="secondary" />
  )
}

/**
 * Displays a big spinner in the middle (margin auto)
 */
export const FullPageSpinner = () => {
  return (
    <div style={fullSpinner}>
      <Spinner size={200} />
    </div>
  )
}

/**
 * @param {JSX} icon A JSX icon element to display on the list element
 * @param {string} name The name of the listelement. Optional for a name/value pair, but at least name or value should be present
 * @param {string} value The value of the listelement. Optional for a name/value pair, but at least name or value should be present
 * @param {boolean} multiLine Wheter we display name/value in one line or two (flex row/column)
 * 
 * Creates a ListItem element.
 */
export const CustomListItem = ({ icon, name, value, multiLine }) => {
  const style = {
    display: 'flex',
    flexDirection: multiLine ? 'column' : 'row'
  }
  return (
    <ListItem>
      {
        icon &&
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      }

      <div style={style}>
        {
          name &&
          <ListItemText primary={name} style={{ marginRight: '15px' }} />
        }
        {
          value &&
          <ListItemText primary={value} />
        }
      </div>
    </ListItem>
  )
}

const gridStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    margin: 10,
    flexBasis: 0,
    flexGrow: 1,
    minWidth: '33%',
    maxWidth: '47%',
    backgroundColor: theme.palette.gridCard,
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
  cardContainer: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap'
  },
}))

export const CustomGridList = ({elements}) => {
  const style = gridStyles()
  
  return (

    <Container fixed className={style.cardContainer}>
      {
        elements.map((elem, i) =>
          <Card key={i} className={style.card}>
            <CardActionArea style={{height: '100%'}}>
              <CardMedia
                className={style.media}
                image={elem.image ? elem.image : 'logo512.png'} //some placeholder image
                title={elem.imageTitle ? elem.imageTitle : 'An image'}
              />
              <Typography gutterBottom variant="h5" component="h2">
                {elem.title ? elem.title : 'No title specified'}
              </Typography>
              <Typography variant="body2" component="p">
                {elem.description ? elem.description : 'No content here yet...'}
              </Typography>
            </CardActionArea>
          </Card>
        )
      }
    </Container>
  )

}