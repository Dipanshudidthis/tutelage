import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    avatarr: {
        fontFamily: "'Staatliches', cursive",
        color: "black"
    }
}));



function Internship() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
            <CardHeader className={classes.avatarr}
        avatar={
          <Avatar style={{backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      >Shrimp and Chorizo Paella</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>My Intern</Typography>
                        <Typography variant='body' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            Believe it or not, internships aren’tgvnn hnhghnh     ghmhgm
                            We caught up with current and former Hult Undergraduate students Fiona Guxholli and Caroline Voigt to find out about their internship experience at Feral Horses: an online platform allowing users to buy shares of artworks.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon/></Button>
                    <Button size='small' color='primary'><InsertCommentIcon/></Button>
                    <Button size='small' color='primary'><TelegramIcon/></Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Internship