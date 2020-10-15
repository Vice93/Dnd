import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, ListItemIcon, IconButton, ListItemText } from '@material-ui/core'
import { Send, MoreVert, InvertColors, AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SettingsMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const switchTheme = () => {
    props.toggleTheme()
  }

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.isLoggedIn &&
          <StyledMenuItem component={Link} to="/profile" >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
        }
        <StyledMenuItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem onClick={switchTheme}>
          <ListItemIcon>
            <InvertColors />
          </ListItemIcon>
          <ListItemText primary="Switch Theme" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}