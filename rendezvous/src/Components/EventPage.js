import React from 'react';
import './EventCard.css';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import headerPhoto from './images/header_concert1.jpg';
import headerPhoto2 from './images/header_concert2.jpg';
import Firebase from 'firebase'
import { db } from '../firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class EventPage extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
		//carousel
		//text
		//icon Button

    return (
		<div>
		<Carousel showThumbs={false} dynamicHeight='100'>
							<div>
									<img src={headerPhoto} style={{height:300, objectFit: 'cover'}}/>
									<p className="legend">Legend 1</p>
							</div>
							<div>
									<img src={headerPhoto2} style={{height:300, objectFit: 'cover'}}/>
									<p className="legend">Legend 2</p>
							</div>
			</Carousel>
			<Grid container spacing={1}>
				<Grid xs={8}>
				<h1>
					Test Concert
				</h1>
				<h2>
					Test Concert
				</h2>
				</Grid>
				<Grid xs={4}>
				<h1>2.17.20</h1>
				</Grid>
			</Grid>
		</div>);
  }
}

export default EventPage;
