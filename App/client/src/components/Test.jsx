import React from 'react';
import ContentContainer from './ContentContainer';
import { Button, CardActionArea, Typography, Card, CardContent, Container, CardMedia } from '@material-ui/core';
import Login from './Login';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  welcomeCard: {
    textAlign: 'center',
    padding: 20,
    margin: 10
  },
  card: {
    textAlign: 'center',
    margin: 10,
    flexBasis: 0,
    flexGrow: 1,
    minWidth: '33%'
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
  cardContainer: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap'
  },
  cardAction: {
    padding: 15
  }
}));

export default function Test() {
  const classes = useStyles();

  return (
    <ContentContainer contentRight={<Login />} hideOnMinSize={true}>
      <Card className={classes.welcomeCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Welcome to RollHub!</Typography>
          <CardContent>
            An Online suite for all things tabletoppy
            </CardContent>
            <Button variant="contained" color="secondary">Learn more</Button>
          </CardContent>
        </Card>
        <Container fixed className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardActionArea className={classes.cardAction}>
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