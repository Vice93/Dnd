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


class Register extends Component {
	render() {
		const { classes } = this.props;
		return (
			// Login form 
			<Card className={classes.card}>
				<CardContent>
					<Icon>
						<Face className="icon-size" />
					</Icon>
					<Typography component="h1">Create an account</Typography>
					<FormControl className={classes.form}>
						<TextField autoFocus variant="outlined" margin="normal" required fullWidth id="email"
							label="Email Address" name="email" autoComplete="email" autoFocus />
						<TextField variant="outlined" margin="normal" required fullWidth name="password"
							label="Password" type="password" id="password" autoComplete="current-password" />
						<TextField variant="outlined" margin="normal" required fullWidth name="password"
							label="Confirm Password" type="password" id="password" autoComplete="current-password" />
						<Button type="submit" fullWidth variant="contained" color="primary">
							Register
						</Button>
						<Grid container className={classes.grid}>
							<Grid item xs>
								<Button className={classes.button} type="submit" color="secondary" component={Link} to="/login">
									Already got an account?
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
}

export default withStyles(styles)(Register);