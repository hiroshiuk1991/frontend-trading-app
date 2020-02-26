import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Button } from '@material-ui/core'
// import { useHistory } from 'react-router-dom'
import API from '../API'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '90%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default function InvestorsPage (props) {
  const classes = useStyles()
  // const history = useHistory()
  const [expanded, setExpanded] = React.useState(false)
  // const [userScore, setUserScore] = React.useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // useEffect(() => {
  //   !!props.investorScore.length && findTheScore()
  // }, [props.investorScore])

  // const findTheScore = () => {
  //   const scoreObj = props.investorScore.find(
  //     score => score.investor_id === props.investorId
  //   )
  //   setUserScore(scoreObj.score)

  // }

  const scoreObj = props.investorScore.find(
    score => score.investor_id === props.investorId
  )

  const scoreReset = () => {
    // const scoreObject = props.investorScore.find(
    //   score => score.investor_id === props.investorId
    // )
    API.resetScore(scoreObj.id)
    // setUserScore(0)
    // API.quizScore(scoreObj.score, props.investorId)
  }

  // function updateProfilePage () {
  //   history.push('/UpdateProfile')
  // }

  if (scoreObj === undefined) return <h1>Loading...</h1>

  return (
    <div className='profile'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='Investor' className={classes.avatar}>
              I
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader='Lets look at your progress'
        />
        <CardMedia
          className={classes.media}
          image='https://www.retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg'
          title='Investor Avatar'
        />
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          ></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph></Typography>
            {props.investorScore && (
              <Typography paragraph>
                {props.name}'s score {scoreObj.score} / 7
              </Typography>
            )}
            <Button variant='contained' color='primary' onClick={scoreReset}>
              Reset Score
            </Button>
            <Button
              variant='contained'
              color='secondary'
              // onClick={updateProfilePage}
            >
              Delete Account
              {/* Update Account */}
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}
