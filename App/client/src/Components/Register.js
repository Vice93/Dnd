import React, {Component} from "react";
import '../css/main.css'

import {Icon} from '@material-ui/core';
import {Face} from '@material-ui/icons';
import {Typography} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'

export default class Register extends Component {
        //Todo: Add link back to register
    render() {
        return (
            //Register form
            <div className="login-container">
                <Icon>
                    <Face className="icon-size"/>
                </Icon>
                <Typography component="h1">Register</Typography>
                <form>
                    <TextField variant="outlined" margin="normal" required fullWidth id="email"
                               label="Email Address" name="email" autoComplete="email" autoFocus/>
                    <TextField variant="outlined" margin="normal" required fullWidth name="password"
                               label="Password" type="password" id="password" autoComplete="current-password"/>
                    <TextField variant="outlined" margin="normal" required fullWidth name="confirmpassword"
                               label="Confirm Password" type="password" id="confirmpassword" autoComplete="current-password"/>
                    <Button className="signin-button" type="submit" fullWidth variant="contained" color="primary">
                        Register
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to={"login"} variant="body2">
                                Already Registered? Log in here.
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}