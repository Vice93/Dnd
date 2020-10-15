import React from 'react';
import ContentContainer from './ContentContainer';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
	welcomeCard: {
		textAlign: 'center',
		padding: 20,
		margin: 'auto auto 20px auto'
	},
	title: {
		textAlign: 'center',
	},
	card: {
		margin: 'auto'
	},
	cardContainer: {
		padding: 0,
		display: 'flex'
	}
}));

export default function AboutUs() {
	const classes = useStyles();

	return (
		<ContentContainer>
			<Card className={classes.welcomeCard}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">About us</Typography>
					<CardContent>
						We are some geeky Geeks that like to play Dungeons and Dragons.
						This Web Application is intended to be hub for all things related to maintaining and
						playing
						Dungeons and Dragons.
            </CardContent>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" className={classes.title}>Features</Typography>
					<li>A seamless character Creator
							<ul>
							- Overview over character sheet
							</ul>
					</li>
					<li>Inventory management
							<ul>
							- keep track of all your stuff with automatic weight & encumberance
							</ul>
					</li>
					<li>
						Initiative & Combat Tracking
						</li>
				</CardContent>
			</Card>
			{/* <Container> //TODO: Implement some material alternative for this ? npm install material-ui-carousel --save
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://vignette.wikia.nocookie.net/righteoushammerdd/images/b/b6/1454525543499.jpg/revision/latest?cb=20170709232137"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Roll your stats with us</h3>
							<p>With the most used methods</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://stmed.net/sites/default/files/dungeons-%26-dragons-wallpapers-28127-1513178.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>To war with friends</h3>
							<p>Your game is just a dice roll Away!</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>Dragons are but a click away!</h3>
							<p>Guaranteed nat 20's</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container> */}
		</ContentContainer>
	)
}

