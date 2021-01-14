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
import WeatherDimg from "../../assets/weatherDash.png";

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
          image={WeatherDimg}
          title="Contemplative Reptile"
          href="https://nickdmrco.github.io/Weather-Dashboard/"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A functional web app which allows you to input your location and recieve a response for the current weather information as well as a five day forecast.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://nickdmrco.github.io/Weather-Dashboard/" target="_blank">
          View Live
        </Button>
        <Button size="small" color="primary" href="https://github.com/nickdmrco/Weather-Dashboard" target="_blank">
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}