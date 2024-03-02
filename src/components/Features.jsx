import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import useWindowPosition from "../hook/useWindowPosotion";
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

import BGImage from '../image/background.jpeg';
import sortingimg from "../image/sortingimg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
  },
  Title: {
    fontFamily: "Nunito",
    fontSize: "2rem",
  },
  colorText: {
    color: "#3f51b5",
  },
  featureBody: {
    width: "80%",
  },
  cardcss:{
    minHeight: '100%',
  },
  scrollbtn:{
    marginTop: '2rem'
  },
  goDown: {
    color: '#3f51b5',
    fontSize: '4rem',
  },
  complexitySec:{
    marginTop: "2rem",
    display: 'flex',
    justifyContent: 'center',
  },
  complexityImg:{
    width: "100%",
    height: "auto",
  }
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="Features">
      <div className={classes.Title}>
        <h1 className={classes.colorText}>Features</h1>
      </div>
      <Grid container spacing={1} className={classes.featureBody}>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345 }} className={classes.cardcss}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sortingimg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sorting
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Bubble Sort</li>
                    <li>Selection Sort</li>
                    <li>Insertion Sort</li>
                    <li>Heap Sort</li>
                    <li>Merge Sort</li>
                    <li>Quick Sort</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345 }} className={classes.cardcss}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sortingimg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Searching
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Linear Search</li>
                    <li>Binary Search</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345 }} className={classes.cardcss}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sortingimg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Structure
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Array</li>
                    <li>Stack</li>
                    <li>Queue</li>
                    <li>Linked List</li>
                    <li>Tree</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345 }} className={classes.cardcss}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sortingimg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Other Algorithms
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Breath First Search</li>
                    <li>Depth First Search</li>
                    <li>Dijkstra's Algorithm</li>
                    <li>Kruskal's Algorithm</li>
                    <li>Primm's Algorithm</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.complexitySec}>
        <img src={BGImage} alt="" className={classes.complexityImg}/>
      </div>

      <Scroll to="ContactUs" smooth={true} className={classes.scrollbtn}>
        <IconButton>
          <ExpandMoreIcon className={classes.goDown} />
        </IconButton>
      </Scroll>
    </div>
  );
}
