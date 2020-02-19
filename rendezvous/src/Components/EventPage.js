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
			photo: "",
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
				if (eventId === 2) this.setState({photo: require('../media/eventPhotos/beer_tasting.jpg')});
				else if (eventId === 3) this.setState({photo: require('../media/eventPhotos/yoga.jpg')});
				else if (eventId === 4) this.setState({photo: require('../media/eventPhotos/food_festival.jpg')});
				else if (eventId === 5) this.setState({photo: require('../media/eventPhotos/comedy.jpg')});
				else if (eventId === 6) this.setState({photo: require('../media/eventPhotos/concert.jpg')});
				else if (eventId === 7) this.setState({photo: require('../media/eventPhotos/hike.jpg')});
				else if (eventId === 8) this.setState({photo: require('../media/eventPhotos/food.jpg')});
				else if (eventId === 9) this.setState({photo: require('../media/eventPhotos/cruise.jpg')});
				else if (eventId === 1) this.setState({photo: require('../media/eventPhotos/wine_tasting.jpg')});
   		});

	}

  render() {
		//carousel
		//text
		//icon Button
		console.log("photo:"+this.state.photo);

		let top_image;
		if(this.state.photo != null){
			top_image = <img src={this.state.photo} style={{height:300, width:'100%', objectFit: 'cover'}}/>
		} else {
			top_image = <div></div>
		}
    return (
		<div>
		{/*<Carousel showThumbs={false} dynamicHeight='100'>
							<div>
									<img src={this.state.photo} style={{height:300, objectFit: 'cover'}}/>
									<p className="legend">Legend 1</p>
							</div>
			</Carousel>*/}
			{top_image}
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
