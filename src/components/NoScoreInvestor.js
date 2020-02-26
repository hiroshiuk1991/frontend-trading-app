import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'

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


export default function NoScoreInvestor(props) {
    const classes = useStyles()

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
                        subheader=''
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
                    </CardActions>
                </Card>
            </div>
        )

}