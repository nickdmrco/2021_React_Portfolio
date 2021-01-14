import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import codeQuiz from "../../assets/codingQuiz.png";

const useStyles = makeStyles((theme) => ({
 root: {
  flexGrow: 1,
 },
 paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 },
 media: {
  height: 300,
 },
}));

export default function CenteredGrid() {
 const classes = useStyles();

 return (
  <Card className={classes.root}>
   <CardActionArea>
    <CardMedia
     className={classes.media}
     image={codeQuiz}
     title="Contemplative Reptile"
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
      Code Quiz
          </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
      A page using javascript, HTML, and CSS to form a questionare about coding. The quiz is timed and subtracts 10 seconds for each incorrect answer.
          </Typography>
    </CardContent>
   </CardActionArea>
   <CardActions>
    <Button size="small" color="primary">
     View Live
        </Button>
    <Button size="small" color="primary">
     Source Code
        </Button>
   </CardActions>
  </Card>
 );
}