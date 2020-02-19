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
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'


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
				<Grid container direction="row">
				<h1>
					Test Concert
				</h1>
				<IconButton>
					<Bookmark />
				</IconButton>

				</Grid>
				<h2>
					Khalid ft. Quinn XCII
				</h2>
				<h3>
					This is a short description of your event: Each ticket includes admission to our craft beer sampling area, where you’ll receive tasting samples from some of the best craft breweries in the country. Every year features old favorites and new finds, and this year is bigger and better than ever, with 80+ beers available.
				</h3>
				</Grid>
				<Grid xs={4} justify="center">
				<h1>2.17.20</h1>
				<Button variant="contained" color="primary">
					Buy Tickets
				</Button>
				<h1>$12-$20</h1>
				<Grid container direction="row" justify="center" alignItems="center">
				<IconButton>
					<Room />
				</IconButton>
				<h2>
					San Francisco
				</h2>

				</Grid>
				</Grid>
			</Grid>
		</div>);
  }
}

export default EventPage;
