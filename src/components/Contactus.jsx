import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Avatar, TextField, Button } from "@material-ui/core";
import { Phone, Email, LocationCity, ExpandLess, Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    flexDirection: "column",
  },
  TitleSec: {
    fontFamily: "Nunito",
    fontSize: "2vw",
    textAlign: "center",
  },
  colorText: {
    color: "#3f51b5",
  },
  colorBg: {
    background: "#3f51b5",
  },
  p: {
    fontfamily: "RobotoMono Regular",
    fontsize: "2rem",
  },
  h1: {
    fontfamily: "Nunito",
    fontsize: "6rem",
    margintop: "0.1rem",
    texttransform: "uppercase",
  },
  bodySec: {
    width: "80%",
  },
  InfoCard: {
    marginTop: "1rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Infotext: {
    marginLeft: "1rem",
  },
  TextCard: {
    paddingLeft: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  submitbtn: {
    width: "30%",
    background: "#3f51b5",
    color: "white",
    marginTop: "1rem",
  },
  goUp: {
    color: "#3f51b5",
    fontSize: "4rem",
  },
  footer: {
    background: "#fff",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
    marginTop: "20px",
    width: "100%",
    marginBottom: "0"
  },
  footerLink: {
    textDecoration: "none",
    color: "#3f51b5"
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>All rights reserved © DSABUDDY 2024 | Designed by 
      <a href="https://www.linkedin.com/in/jayesh-wani/" target="_blank" className={classes.footerLink}> Jayesh Wani</a>, 
      <a href="https://www.linkedin.com/in/sanjay-yadav/" target="_blank" className={classes.footerLink}> Sanjay Yadav</a>, 
      <a href="https://www.linkedin.com/in/nibin-baby/" target="_blank" className={classes.footerLink}> Nibin Baby</a>
      </p>
    </footer>
  );
};

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root} id="ContactUs">
        <div className={classes.TitleSec}>
          <p>Get in Touch</p>
          <h1 className={classes.colorText}>CONTACT</h1>
        </div>
        <div className={classes.bodySec}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <div className={classes.contentSec}>
                <Card className={classes.InfoCard}>
                  <Avatar className={classes.colorBg}>
                    <Phone />
                  </Avatar>
                  <p className={classes.Infotext}>+91 9307695937</p>
                </Card>
                <Card className={classes.InfoCard}>
                  <Avatar className={classes.colorBg}>
                    <Email />
                  </Avatar>
                  <p className={classes.Infotext}>dsabuddy@gmail.com</p>
                </Card>
                <Card className={classes.InfoCard}>
                  <Avatar className={classes.colorBg}>
                    <Home />
                  </Avatar>
                  <p className={classes.Infotext}>Kurla, Mumbai</p>
                </Card>
                <Card className={classes.InfoCard}>
                  <Avatar className={classes.colorBg}>
                    <LocationCity />
                  </Avatar>
                  <p className={classes.Infotext}>Don Bosco Institute of Technology</p>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.contentSec}>
                <div className={classes.TextCard}>
                  <p>Your name</p>
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
                <div className={classes.TextCard}>
                  <p>Your Email</p>
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
                <div className={classes.TextCard}>
                  <p>Your message</p>
                  <TextField
                    id="standard-basic"
                    variant="outlined"
                    multiline
                    minrows={4}
                  />
                </div>
                <div className={classes.TextCard}>
                  <Button variant="contained" className={classes.submitbtn}>
                    Submit
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
