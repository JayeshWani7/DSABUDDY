import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#3f51b5',
  },
  container: {
    textAlign: 'center',
    fontSize: '3vw'
  },
  title: {
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#3f51b5',
    fontSize: '4rem',
  },
  image: {
    width: '100%',
    maxHeight: '79vh',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));

const placeholderImages = [
  'https://via.placeholder.com/500x300',
  'https://via.placeholder.com/500x300',
  'https://via.placeholder.com/500x300',
];

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setChecked(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % placeholderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <Carousel
            index={activeIndex}
            autoPlay={false} 
            animation="fade"
            timeout={500}
            navButtonsAlwaysVisible={false}
            indicators={false}
          >
            {placeholderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={classes.image}
              />
            ))}
          </Carousel>
          <Scroll to="Features" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
