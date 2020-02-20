import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Lessons() {
    const [checked, setChecked] = React.useState(false);
    const classes = useStyles()

    const handleChange = event => {
        setChecked(event.target.checked);
    };


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fbd4f2a60-11bb-11ea-a7e6-62bf4f9e548a?fit=scale-down&source=next&width=700"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        What are the Stock Markets?
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Short answer: A world where companies sell themselves
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                Read?
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    value="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
        />
                <Button size="small" color="primary">
                    Read more
        </Button>
            </CardActions>
        </Card>
    );
    
}


