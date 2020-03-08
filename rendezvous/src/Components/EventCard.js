import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
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
			loading: true,
      date: this.fetchFromDatabase(this.props.eventId),
      eventName: this.fetchFromDatabase(this.props.eventId),
      shortDescription: this.fetchFromDatabase(this.props.eventId),
      photo: require('../media/eventPhotos/wine_tasting.jpg')
    };
  }

	fetchFromDatabase(eventId){
		db.collection("event_data").where("eventId", "==", eventId).get()
		.then(querySnapshot => {
     		var data = querySnapshot.docs.map(doc => doc.data());
     		this.setState({date: data[0]['date']});
     		this.setState({shortDescription: data[0]['short_description']});
     		this.setState({eventName: data[0]['event_name']});
				this.setState({loading: false})
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
		if (this.state.loading){
			return <div/>
		}
    return (
      <Grid item xs={12} sm={6} md={4}>
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
