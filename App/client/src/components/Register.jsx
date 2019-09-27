import React, { Component } from 'react'
import { Icon, Button, Grid, TextField, Typography, Card, CardContent, FormControl } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import history from '../providers/HistoryProvider'

const useStyles = makeStyles(theme => ({
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
}))


export default function Register() {
  const classes = useStyles()
	const { register } = useAuth()
	const [state={password: '', email: '', confirm: ''}, setState] = useState()
	const [fieldErr={password: false, email: false, confirm: false}, setFieldErr] = useState()
	const test = false

	const sendForm = () => {
		//Validate and show snackbar or smth: https://material-ui.com/components/snackbars/
	console.log(state)
		if(state.email !== '' && state.password !== '' && state.password === state.confirm)
			console.log("register yay")
			//register({emInput, pwInput}).then(history.push('/'))
		else
				setFieldErr({...fieldErr, email: true})
		} 
		
	return (
		// Login form 
		<Card className={classes.card}>
			<CardContent>
				<Icon>
					<Face className="icon-size" />
				</Icon>
				<Typography component="h1">Create an account</Typography>
				<FormControl className={classes.form}>
					<TextField autoFocus variant="outlined" onInput={e => setState({...state, email: e.target.value})} margin="normal" required fullWidth id="email"
						label="Email Address" name="email" autoComplete="email" error={fieldErr.email} />
					<TextField variant="outlined" onInput={e => setState({...state, password: e.target.value})} margin="normal" required fullWidth name="password"
						label="Password" type="password" id="password" autoComplete="current-password" />
					<TextField variant="outlined" onInput={e => setState({...state, confirm: e.target.value})} margin="normal" required fullWidth name="confirm"
						label="Confirm Password" type="password" id="confirm" autoComplete="current-password" />
					<Button type="submit" fullWidth variant="contained" color="primary" onClick={sendForm}>
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