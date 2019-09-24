import React, {Component} from "react";
import {Icon} from "@material-ui/core";
import {Face} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from "@material-ui/core/ListItem/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
    card: {
        padding: '30px 20px',
        display: 'inline-block',
        textAlign: 'center',

    },
    button: {
        fontSize: '10px'
    },
    form: {
        /* en bredde her etterhvert*/
    },
    grid: {
        marginTop: 10
    }
});

//Temp Password Reset...
class ForgotPassword extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Icon>
                        <Face className="icon-size"/>
                    </Icon>
                    <Typography component="h1">Reset Password</Typography>
                    <FormControl className={classes.form}>
                        <TextField autoFocus variant="outlined" margin="normal" required fullWidth id="resetpassword"
                                   label="New Password" type="password" name="resetpassword"
                                   autoComplete="current-password"/>
                        <TextField variant="outlined" margin="normal" required fullWidth id="confirmresetpassword"
                                   label="Confirm Password" type="password" name="confirmresetpassword"
                                   autoComplete="current-password"/>
                        <Button className="signin-button" type="submit" fullwidth variant="contained"
                                color="primary"> Reset Password
                        </Button>
                        <Grid container className={classes.grid}>
                            <Grid item xs>
                                <Button className={classes.button} type="submit" color="secondary" component={Link} to={"login"}>
                                    Ops, I remember my password
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </CardContent>
            </Card>
        )
    }
}

ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ForgotPassword);