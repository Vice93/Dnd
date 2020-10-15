import React from 'react'
import ContentContainer from './ContentContainer'
import { CardContent, Card, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Edit, Email, AccountBox, Cake, Help } from '@material-ui/icons'
import { useUser } from '../context/UserContext'
import Moment from 'moment'
import { CustomListItem, CustomGridList } from './Lib'

const useStyles = makeStyles(theme => ({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '400px',
    width: '100%',
    backgroundImage: theme.palette.gradient, //or an image, banner can be anything really
    backgroundPosition: 'center',
    zIndex: -10
  },
  spacer: {
    marginTop: '350px'
  },
  profileInfoHeader: {
    width: '90%',
    float: 'left'
  },
  profileInfoEdit: {
    float: 'right'
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    borderRadius: 15,
    margin: 10,
  },
  myCharsHeader: {
    margin: '20px 0 0 20px'
  },
}))

export default function Profile() {
  const classes = useStyles()
  const user = useUser().user

  return (
    <div>
      <div className={classes.background} />
      <div className={classes.spacer} />
      <ContentContainer contentRight={ProfileInfo(classes, user)}>
        {MyCharactersList(classes)}
      </ContentContainer>
    </div>

  )
}


export function ProfileInfo(classes, user) {
  Moment.locale('en')
  const date = Moment(user.createdDate).format('DD.MM.YYYY')

  return (
    <Card className={classes.card}>
      <CardContent className={classes.profileInfoContainer}>
        <div>
          <Typography className={classes.profileInfoHeader} gutterBottom component="h4"><b>My profile</b></Typography>
          <Edit className={classes.profileInfoEdit} />

        </div>
        <List>
          <CustomListItem icon={<Email />} name={'Email: '} value={user.email} multiLine={true} />
          <CustomListItem icon={<AccountBox />} name={'Username: '} value={user.username} multiLine={true} />
          <CustomListItem icon={<Cake />} name={'Member since: '} value={date} multiLine={true} />
          <CustomListItem icon={<Help />} name={'Some other field? '} value={'some other value'} multiLine={true} />
        </List>
      </CardContent>
    </Card>
  )
}

export function MyCharactersList(classes) {
  const elems = [ //these are loaded from the database
    {title: 'Salvador Diez', description: 'A hulk of a dwarf. This little guy is often mistaken for an ogre when he walks into towns.'}, 
    {title: 'Gargantuan Smith', description: 'As the name would suggest, this is probably the most ordinary guy ever.'}, 
    {title: 'Slayer of darkness', description: `Wields a fire katana with an edge that bleeds of shadow. Has burning red eyes and is more than capable of teleporting
    right behind you. His catchphrase goes something like: 'Nothing personell, gnome.'`}, 
    {title: `Knzh'thc glrash`, description: `No one really knows where this thing originated from. It's a small beaver looking thing that oozes green goo
    when it shuffles along the floor. He wields a two handed greatsword 5 times the size of his body, so nobody really dares question his appearance. `}, 
    {title: 'The leech', description: `A human that enjoys taking credit for everyone elses' achievements. He has never really done anything of worth himself, 
    and takes great pride in being the greatest leech of them all. `}
  ]
  return (
    <Card className={classes.card}>
      <Typography gutterBottom className={classes.myCharsHeader} component="h4"><b>My characters</b></Typography>
      <CardContent className={classes.dummyHeight}>
        <CustomGridList elements={elems} />
      </CardContent>
    </Card>
  )
}