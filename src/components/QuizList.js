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

export default function QuizList () {
  const classes = useStyles()
  const history = useHistory()

  function handleQuizClick () {
    history.push('/MainQuiz')
  }

  function secondQuiz () {
    history.push('/secondQuiz')
  }

  function thirdQuiz () {
    history.push('/thirdquiz')
  }

  // function handleLessonFourClick() {
  //     history.push('/lessonfour')
  // }

  return (
    <div className='backgroundpicture'>
      <div className='lessons'>
        <h2 className='welcome'>
      
          Once you feel ready, please take the Quiz and check back at your
          profile page for your score!
        </h2>
        <div className='cardContainer'>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.readwrite.com/wp-content/uploads/2019/08/Why-You-Love-Online-Quizzes-825x500.jpg'
                title='x'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  1st Quiz (General Knowledge Test)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() => handleQuizClick()}
              >
                Click Me!
              </Button>
            </CardActions>
          </Card>

          {/* <br />
          <br />

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://zycrypto.com/wp-content/uploads/2019/01/Six-Tips-For-Trading-The-Crypto-Market-Cycles.png'
                title='Stock Brokers'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  2nd Quiz (Market Cycles Quiz)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary' onClick={() => secondQuiz()}>
                Click Me!
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://static01.nyt.com/images/2019/01/20/business/20VIEW-illo/merlin_149331819_0656d095-16cd-4a34-b581-0c9cc17b529a-superJumbo.jpg?quality=90&auto=webp'
                title='Bull/Bear Market'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Bear Market Quiz (Market Crashes)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary' onClick={() => thirdQuiz()}>
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
                image='https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/05/2018-05-10-15_03_59-Meet-the-only-female-broker-on-New-Yorks-stock-exchange-BBC-News.jpg'
                title='Broker'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  4th Quiz (Hard Quiz)
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
          </Card> */}
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
