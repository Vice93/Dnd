import React from 'react';
import '../css/sidebar.css';
import 'font-awesome/css/font-awesome.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false
  });
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, isOpen: open });
  };
  const handleRedirect = (url) => {
    if(window.location.pathname !== url) {
      this.props.history.push(url)
    }
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/test" className="sidebar-item">
          <ListItem button>
            <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
            <ListItemText primary="Test" />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="/about-us" className="sidebar-item">
          <ListItem button className="sidebar-item">
            <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
            <ListItemText primary="About us" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(!state.isOpen)}><i className="fa fa-fw fa-bars icon-color" style={{ fontSize: '1.75em' }} /></Button>
      <Drawer id="sidebar" open={state.isOpen} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}