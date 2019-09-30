import React from 'react'
import ContentContainer from './ContentContainer'
import { CardContent, Card, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Edit, Email, AccountBox, Cake, Help } from '@material-ui/icons'
import { useUser } from '../context/UserContext'
import Moment from 'moment'
import { CustomListItem } from './Lib'

const useStyles = makeStyles(theme => ({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '400px',
    width: '100%',
    backgroundImage: 'url(https://vignette.wikia.nocookie.net/righteoushammerdd/images/b/b6/1454525543499.jpg/revision/latest?cb=20170709232137)',
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
    margin: 10,
    backgroundColor: theme.palette.tertiary.main
  },
  dummyHeight: {
    height: '500px'
  }
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

  return (
    <Card className={classes.card}>
      <CardContent className={classes.dummyHeight}>
        Load characters in here maybe?
      </CardContent>
    </Card>
  )
}