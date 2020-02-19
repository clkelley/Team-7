import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import stockPhoto1 from '../media/eventPhotos/wine_tasting.jpg';
import stockPhoto2 from '../media/eventPhotos/beer_tasting.jpg';
import stockPhoto3 from '../media/eventPhotos/food_festival.jpg';
import Firebase from 'firebase'
import { db } from '../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.fetchFromDatabase(this.props.eventId),
      eventName: this.fetchFromDatabase(this.props.eventId),
      shortDescription: this.fetchFromDatabase(this.props.eventId),
      photo: require('../media/eventPhotos/wine_tasting.jpg'),
    };
  }

	fetchFromDatabase(eventId){
		console.log(eventId);
		db.collection("event_data").where("eventId", "==", eventId).get()
		.then(querySnapshot => {
     		var data = querySnapshot.docs.map(doc => doc.data());
     		this.setState({date: data[0]['date']});
     		this.setState({shortDescription: data[0]['short_description']});
     		this.setState({eventName: data[0]['event_name']});
   		});
	}

  render() {
    return (
      <Grid item xs={12} sm={4}>
    	<Card>
      		<CardActionArea component={Link} to={"/events/"+this.props.eventId}>
       		<CardMedia
          		component="img"
          		height="140"
          		src={this.state.photo}
        	/>
        	<CardContent>
          		<h2 className="eventTitle">
           		 {this.state.eventName}
          		</h2>
          		<p className="shortDescription">
            		{this.state.shortDescription} <b className="eventDate">• {this.state.date}</b>
          		</p>
        	</CardContent>
      	</CardActionArea>
    	</Card>
    </Grid>
    );
  }
}

export default EventCard;
