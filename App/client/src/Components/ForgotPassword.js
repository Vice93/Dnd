import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid, TextField, Typography, Card, CardContent, FormControl } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	card: {
		padding: '30px 20px',
		display: 'contents',
		textAlign: 'center',
		margin: 'auto'
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

//Temp Password Reset...
class ForgotPassword extends Component {
	render() {
		const { classes } = this.props;
		return (
			// Login form 
			<Card className={classes.card}>
				<CardContent>
					<Icon>
						<Face className="icon-size" />
					</Icon>
					<Typography component="h1">Reset Password</Typography>
					<FormControl className={classes.form}>
						<TextField autoFocus variant="outlined" margin="normal" required fullWidth id="email"
							label="Email Address" name="email" autoComplete="email" />
						<Button type="submit" fullWidth variant="contained" color="primary">
							Send Email
						</Button>
						<Grid container className={classes.grid}>
							<Grid item xs>
								<Button className={classes.button} type="submit" color="secondary" component={Link} to="/login">
									Oops, I remember my account
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
}

export default withStyles(styles)(ForgotPassword);