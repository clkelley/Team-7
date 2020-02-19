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
		const eventId = parseInt(props.match.params.eventId);
		console.log(eventId);
		this.state = {
			date: "loading...",
			eventName: "loading...",
			shortDescription: "loading...",
			photo: require('../media/eventPhotos/wine_tasting.jpg'),
		};
		this.fetchFromDatabase(eventId);

		// this.state = {
    //   date: this.fetchFromDatabase(eventId),
    //   eventName: this.fetchFromDatabase(eventId),
    //   shortDescription: this.fetchFromDatabase(eventId),
    //   photo: require('../media/eventPhotos/wine_tasting.jpg'),
    // };

  }

	fetchFromDatabase(eventId){
		console.log("fetch from database eventid" + eventId);
		db.collection("event_data").where("eventId", "==", eventId).get()
		.then(querySnapshot => {
     		var data = querySnapshot.docs.map(doc => doc.data());
     		this.setState({date: data[0]['date']});
     		this.setState({shortDescription: data[0]['short_description']});
     		this.setState({eventName: data[0]['event_name']});
   		});
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
			<Grid container spacing={1} style={{ padding: 20}}>
				<Grid xs={8}>
				<Grid container direction="row">
				<h1>
					{this.state.eventName || "Loading..."}
				</h1>
				<IconButton>
					<Bookmark />
				</IconButton>

				</Grid>
				<h3>
					{this.state.shortDescription || "Loading..."}
				</h3>
				</Grid>
				<Grid xs={4} justify="center">
				<h1>{this.state.date || "Loading..."}</h1>
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
