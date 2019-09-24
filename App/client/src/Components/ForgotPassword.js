import React, {Component} from "react";
import {Icon} from "@material-ui/core";
import {Face} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';

//Temp Password Reset...
export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="login-container">
                <Icon>
                    <Face/>
                </Icon>
                <Typography component="h1">Reset Password</Typography>
                <form>
                    <TextField variant="outlined" margin="normal" required fullWidth id="resetpassword"
                               label="New Password" type="password" name="resetpassword" autoComplete="current-password"/>
                    <TextField variant="outlined" margin="normal" required fullWidth id="confirmresetpassword"
                               label="Confirm Password" type="password" name="confirmresetpassword" autoComplete="current-password"/>
                    <Button className="signin-button" type="submit" fullwidth variant="contained" color="primary"> Reset Password
                    </Button>
                </form>
                <Grid container>
                    <Grid item xs>
                        <Link to={"login"} variant="body2">
                            Ops, I remember my password
                        </Link>
                    </Grid>

                </Grid>
            </div>
        )
    }
}