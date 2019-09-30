import React from 'react'
import { Icon, Button, Grid, TextField, Typography, Card, CardContent, FormControl, FormHelperText } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Spinner, openSnackbar } from '../components/Lib'

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
	},
	margin: {
		marginTop: 10
	}
}))

const pwRegex = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/)
const usrRegex = new RegExp(/^.*(?=.{4,}).*$/)
const emRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export default function Register() {
	const classes = useStyles()
	const { register } = useAuth()
	const [state = { username: '', password: '', email: '', confirm: '' }, setState] = useState()
	const [fieldErr = { username: false, password: false, email: false, confirm: false }, setFieldErr] = useState()
	const [isMatch, setIsMatch] = useState(true)
	const [isLoading, setIsLoading] = useState(false)


	const sendForm = () => {
		if(isLoading){
			openSnackbar('info', 'Register is underway, please wait...')
		}

		const formValid = validateForm()
		const pwMatches = checkPasswordMatch()

		if (formValid && pwMatches) {
			setIsLoading(true)
			register(state).then((res) => {
				console.log(res)
				setIsLoading(false)
				if (!res.created)
					openSnackbar('error', res.message)
				else
					openSnackbar('success', 'Account registered. Please check your email to continue.')
				//history.push('/') //rerouting with history push doesnt work after promise is resolved here
			}).catch(err => {
				setIsLoading(false)
				openSnackbar('error', 'Something went wrong. Please try again later.')
				console.log(err) // Show some message that everything is fucked
			})
		}
	}

	const enterPressed = (e) => {
		if (e.key === 'Enter')
			sendForm()
	}

	// Validate RegExp
	const validateForm = () => {
		const usrnValid = usrRegex.test(state.username)
		const emailValid = emRegex.test(state.email)
		const pwValid = pwRegex.test(state.password)
		const cmValid = pwRegex.test(state.confirm)

		setFieldErr({
			...fieldErr,
			username: !usrnValid,
			email: !emailValid,
			password: !pwValid,
			confirm: !cmValid
		})

		return usrnValid && emailValid && pwValid && cmValid
	}

	// Validate Password match
	const checkPasswordMatch = () => {
		const match = state.password === state.confirm
		setIsMatch(match)
		return match
	}

	return (
		// Login form 
		<Card className={classes.card}>
			<CardContent>
				<Icon>
					<Face className="icon-size" />
				</Icon>
				<Typography component="h1">Create an account</Typography>
				<form>
					<FormControl className={classes.form} onKeyPress={enterPressed}>
						<TextField autoFocus variant="outlined" onInput={e => setState({ ...state, username: e.target.value })} margin="normal" required fullWidth id="username"
							label="Username" name="username" autoComplete="username" error={fieldErr.username} />
						{
							fieldErr.username &&
							<FormHelperText error={true}>Username is too short</FormHelperText>
						}
						<TextField variant="outlined" onInput={e => setState({ ...state, email: e.target.value })} margin="normal" required fullWidth id="email"
							label="Email Address" name="email" autoComplete="email" error={fieldErr.email} />
						{
							fieldErr.email &&
							<FormHelperText error={true}>Invalid Email</FormHelperText>
						}
						<TextField variant="outlined" onInput={e => setState({ ...state, password: e.target.value })} margin="normal" required fullWidth name="password"
							label="Password" type="password" id="password" autoComplete="current-password" error={fieldErr.password} />
						{
							fieldErr.password &&
							<FormHelperText error={true}>Invalid Password</FormHelperText>
						}
						<TextField variant="outlined" onInput={e => setState({ ...state, confirm: e.target.value })} margin="normal" required fullWidth name="confirm"
							label="Confirm Password" type="password" id="confirm" autoComplete="current-password" error={fieldErr.confirm} />
						{
							fieldErr.confirm &&
							<FormHelperText error={true} className={classes.label}>Invalid Password</FormHelperText>
						}
						{
							!fieldErr.confirm && !isMatch &&
							<FormHelperText error={true}>Password doesnt match</FormHelperText>
						}
						<Button className={classes.margin} fullWidth variant="contained" color="primary" onClick={sendForm}>
							Register
						</Button>
						<Grid container className={classes.grid}>
							<Grid item xs>
								<Button className={classes.button} type="submit" color="secondary" component={Link} to="/login">
									Already got an account?
								</Button>
							</Grid>
						</Grid>
						{
							isLoading &&
							<Spinner />
						}
					</FormControl>
				</form>
			</CardContent>
		</Card>
	)
}