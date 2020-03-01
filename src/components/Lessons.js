import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import Checkbox from '@material-ui/core/Checkbox'
// import { Redirect } from 'react-router-dom'
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

export default function Lessons () {


  const classes = useStyles()
  const history = useHistory()


  function handleLessonOneClick() {
    history.push('/lessonone')
  }

  function handleLessonTwoClick() {
    history.push('/lessontwo')
  }

  function handleLessonThreeClick() {
    history.push('/lessonthree')
  }

  function handleLessonFourClick() {
    history.push('/lessonfour')
  }

  return (
    <div className='backgroundpicture'>
    <div className='lessons'>
      <div className='cardContainer'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fbd4f2a60-11bb-11ea-a7e6-62bf4f9e548a?fit=scale-down&source=next&width=700'
              title='Stock Market Screens'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                What is the Stock Market?
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Short answer: A world where companies sell themselves
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            

            <Button size='small' color='primary' onClick={() => handleLessonOneClick()}>
              Long Answer
            </Button>
          </CardActions>
        </Card>

        <br />
        <br />
    
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://lh3.googleusercontent.com/p0yHCFBHP-7R3DhwK6rpBb_fkhRzSLXddm8l1zqZHchDHHlbl4h8D7VdMgjxH6JoPtBME5u0j1m-OYSmpcFNuUHiZXTvYBAv=s1200'
              title='Stock Brokers'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Why do people buy/sell Stock?
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Short Answer: Purchasing instances of stocks for a predermined
                price.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Button size='small' color='primary' onClick={() => handleLessonTwoClick()}>
              Long Answer
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://moneymorningnews.weebly.com/uploads/1/2/5/1/12513096/4589669_orig.jpg'
              title='Bull/Bear Market'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                What's a bull/bear Market?
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Short answer: bull=good market, bear=bad markets
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
            <Button size='small' color='primary' onClick={() => handleLessonThreeClick()}>
              Long Answer
            </Button>
          </CardActions>
        </Card>

        <br />
        <br />

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/05/2018-05-10-15_03_59-Meet-the-only-female-broker-on-New-Yorks-stock-exchange-BBC-News.jpg'
              title='Broker'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                How can I become a successful trader?
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Short Answer: Practice, attention to detail, and luck.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Button size='small' color='primary' onClick={() => handleLessonFourClick()}>
              Long Answer
            </Button>
          </CardActions>
        </Card>
      </div>
      {/* <div className='cardContainer'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://www.gadgetaccess.com/wp-content/uploads/2018/11/insider-trading-1-770x390.jpg'
              title='Insider Trading'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                What is insider trading?
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Short answer: An unfair advantage.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            Completed?
            <Checkbox
              checked={checked}
              onClick={handleChange}
              value='primary'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Button size='small' color='primary'>
              Long Answer
            </Button>
          </CardActions>
        </Card>
      </div> */}
    </div>
    </div>
  )
}
