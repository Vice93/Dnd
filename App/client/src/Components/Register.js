import React, {Component} from "react";
import '../css/main.css'

import {Card, Icon} from '@material-ui/core';
import {Face} from '@material-ui/icons';
import {Typography} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';

const styles = theme => ({
    card: {
        padding: '30px 20px',
        display: 'inline-block',
        textAlign: 'center'
    },
    button: {
        fontSize: '10px'
    },
    form: {
        /* En bredde her etterhvert */
    },
    grid: {
        marginTop: 10
    }
});

class Register extends Component {
    //Todo: Add link back to register
    render() {
        const {classes} = this.props;
        return (
            //Register form
            <Card className={classes.card}>
                <CardContent>
                    <Icon>
                        <Face className="icon-size"/>
                    </Icon>

                    <Typography component="h1">Register</Typography>
                    <FormControl className={classes.form}>
                        <TextField autoFocus variant="outlined" margin="normal" required fullWidth id="email"
                                   label="Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField autoFocus variant="outlined" margin="normal" required fullWidth name="password"
                                   label="Password" type="password" id="password" autoComplete="current-password"/>
                        <TextField  autoFocus variant="outlined" margin="normal" required fullWidth name="confirmpassword"
                                   label="Confirm Password" type="password" id="confirmpassword"
                                   autoComplete="current-password"/>
                        <Button className="signin-button" type="submit" fullWidth variant="contained" color="primary">
                            Register
                        </Button>
                        <Grid container className={classes.grid}>
                            <Grid item xs>
                                <Button className={classes.button} type="submit" color="secondary" component={Link} to={"/login"}>
                                    Already Registered? Log in here.
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </CardContent>
            </Card>
        )
    }
}
Register.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Register);