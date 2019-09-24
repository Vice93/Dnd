import React, {Component} from 'react';
import '../css/main.css';
import PropTypes from 'prop-types';
import {Icon,Button,Grid,TextField,Typography,Card, CardContent} from '@material-ui/core';
import {Face} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    maxWidth: 250,
    padding: '30 20',
    display: 'inline-block',
    textAlign: 'center'
  }
});


class Login extends Component {
  render(){
    const { classes } =  this.props;
    return(
      // Login form 
      <Card className={classes.card}>
        <CardContent>
          <Icon>
            <Face className="icon-size"/>
          </Icon> 
          <Typography component="h1">Sign in</Typography>
          <form>
            <TextField variant="outlined" margin="normal" required fullWidth id="email"
              label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth name="password"
              label="Password" type="password" id="password" autoComplete="current-password"/>
            <Button className="signin-button" type="submit" fullWidth variant="contained" color="primary">
              Sign in 
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"forgot-password"} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link to={"register"} variant="body2">
                  No account?
                </Link>
              </Grid>
            </Grid>
          </form> 
        </CardContent>
      </Card>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);