import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import stockPhoto1 from '../media/eventPhotos/wine_tasting.jpg';
import stockPhoto2 from '../media/eventPhotos/beer_tasting.jpg';
import stockPhoto3 from '../media/eventPhotos/food_festival.jpg';
import Firebase from 'firebase'
import { db } from '../firebase';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    let dateN = (this.props.eventId==="1" ? "1/1/20" : "1/2/20");
    this.state = {
      eventId:"",
      date: dateN,
      eventName: "Wine Tasting",
      shortDescription: "Taste a variety of local wines straight from the barrel with a scenic view",
    };
  }

	fetchFromDatabase(eventId){
		console.log("fetched");
	}

  render() {
    return (
      <Grid item xs={4}>
    	<Card>
      		<CardActionArea>
       		<CardMedia
          		component="img"
          		height="140"
          		src={stockPhoto1}
        	/>
        	<CardContent>
          		<h2 className="eventTitle">
           		 {this.state.eventName}
          		</h2>
          		<p className="shortDescription">
            		{this.state.shortDescription} <b className="eventDate">• {this.state.date}</b> {this.props.eventId}
          		</p>
        	</CardContent>
      	</CardActionArea>
      	<CardActions>
        	<Button size="small" color="primary">
          		Learn More
        	</Button>
      	</CardActions>
    	</Card>
    </Grid>
    );
  }
}

export default EventCard;
