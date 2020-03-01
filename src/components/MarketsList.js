import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 40,
    marginTop: 350
  },
  media: {
    height: 140
  }
})

export default function MarketList () {
  const classes = useStyles()
  const history = useHistory()

  function handleMarketsClick () {
    history.push('/Markets')
  }

  // function handleLessonTwoClick() {
  //     history.push('/lessontwo')
  // }

  // function handleLessonThreeClick() {
  //     history.push('/lessonthree')
  // }

  // function handleLessonFourClick() {
  //     history.push('/lessonfour')
  // }

  return (
    <div className='backgroundpicture'>
      <div className='lessons'>
        <div className='cardContainer'>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://econafterhoursssc.files.wordpress.com/2018/09/art1.gif?w=679&h=475&zoom=2'
                title='x'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  The 2008/2009 Housing Market Crash.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() => handleMarketsClick()}
              >
                Click Me!
              </Button>
            </CardActions>
          </Card>

          <br />
          <br />

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://image.shutterstock.com/image-illustration/fail-dollar-concept-american-economy-600w-1374055946.jpg'
                title='Stock Brokers'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  The 2002/2003 DotCom Bubble
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                //   onClick={() => handleLessonTwoClick()}
              >
                Click Me
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAAzgD2.img?h=1008&w=1598&m=6&q=60&o=f&l=f'
                title='Bull/Bear Market'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  The 1932 Great Depression
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                //   onClick={() => handleLessonThreeClick()}
              >
                Click Me
              </Button>
            </CardActions>
          </Card>

          <br />
          <br />

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://katehon.com/sites/default/files/1433763182_72353_debt-crisis-behind-us-by-luojie-china.jpg'
                title='Broker'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  The International Debt Crisis
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                //   onClick={() => handleLessonFourClick()}
              >
                Click Me
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}
