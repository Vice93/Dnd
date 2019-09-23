import React, { Component } from 'react';
import '../css/main.css';

import Icon from '@material-ui/core/Icon';
import Face from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export default class Login extends Component {

  render(){
    return(
      // Login form 
      <div className="login-container">
        <Icon>
          <Face/>
        </Icon> 
        <Typography component="h1">Sign in</Typography>
        <form>
          <TextField variant="outlined" margin="normal" required fullWidth id="email"
            label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField variant="outlined" margin="normal" required fullWidth name="password"
            label="Password" type="password" id="password" autoComplete="current-password"/>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign in 
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                Don't have an account?
              </Link>
            </Grid>
          </Grid>
        </form> 
      </div>
    )
  }
}