import React, { Component } from 'react';
import ContentContainer from '../Components/ContentContainer';
import {Button,CardActionArea,CardActions,Typography,Card, CardContent, Container, CardMedia} from '@material-ui/core';
import Test2 from '../Components/Test2';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  welcomeCard: {
    textAlign: 'center',
    padding: 20,
    margin: 10
  },
  card: {
    maxWidth: 345,
    minWidth: 200,
    textAlign: 'center',
    margin: 10
  },
  media: {
    height: 140,
  },
  cardContainer: {
    padding: 0,
    display: 'flex'
  }
}));

export default function Test() {
	const classes = useStyles();

    return(
      <ContentContainer contentRight={<Test2 />}>
        <Card className={classes.welcomeCard}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Welcome to RollHub!</Typography>
            <CardContent>
              An Online suite for all things tabletoppy
            </CardContent>
            <Button variant="contained" color="secondary">Learn more</Button>
          </CardContent>
        </Card>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="logo512.png"
                title="Test logo da"
              />
              <Typography gutterBottom variant="h5" component="h2">
                Leechi
              </Typography>
              <Typography variant="body2" component="p">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Typography>
            </CardActionArea>
          </Card>
        </Container>
      </ContentContainer>
  )
}