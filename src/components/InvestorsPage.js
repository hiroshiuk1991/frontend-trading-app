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
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  const [expanded, setExpanded] = React.useState(false)
  // const [userScore, setUserScore] = React.useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const { scoreObj } = props

  const scoreReset = () => {
    API.resetScore(scoreObj.id).then(() =>
      props.removeInvestorScore(scoreObj.id)
    )
  }

  const deleteInvestor = () => {
    return API.deleteInvestor(props.investorId)
      .then(localStorage.removeItem('token'))
      .then(alert('Investor Deleted'))
      .then(history.push('/landingpage'))
    // .then(props.investorStateReset)
  }

  const updateInvestor = () => {
    history.push('/editInvestor')
  }

  return (
    <div className='backgroundpictureLSE'>
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
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={props.name}
            subheader='Lets take a Quiz and look at your score!'
          />
          <CardMedia
            className={classes.media}
            image={
              !scoreObj
                ? 'https://www.retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg'
                : 'https://images.markets.businessinsider.com/image/5b3a055b4e04d328008b45c5-1024/gettyimages-492444164-1.jpg'
            }
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
            <Button
              variant='contained'
              color='secondary'
              onClick={deleteInvestor}
            >
              Delete Account
            </Button>

            <Button
              variant='contained'
              color='primary'
              onClick={updateInvestor}
            >
              Update Account
            </Button>

            {/* <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton> */}
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            {scoreObj && (
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
            )}
          </CardActions>
          {scoreObj && (
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph></Typography>

                <Typography paragraph>
                  <p id='warren'>{props.name}'s score {scoreObj.score} / 14</p>
                  <p id='warren'>
                    You've answered some questions right, you've been ranked up
                    to the old man in the picture, Warren Buffet, the worlds
                    most famous investor.
                  </p>
                </Typography>

                <Button
                  variant='contained'
                  color='primary'
                  onClick={scoreReset}
                >
                  Reset Score
                </Button>
              </CardContent>
            </Collapse>
          )}
        </Card>
      </div>
    </div>
  )
}
