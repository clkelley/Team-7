import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import stockPhoto from '../media/eventPhotos/wine_tasting.jpg';


class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId:"",
      date: "1/2/20",
      eventName: "Wine Tasting",
      shortDescription: "Taste a variety of local wines straight from the barrel with a scenic view"
    };
  }
  
  render() {
  	
    return (
      <Grid item xs={4}>
    	<Card>
      		<CardActionArea>
       		<CardMedia
          		component="img"
          		height="140"
          		src={stockPhoto}
        	/>
        	<CardContent height="100">
          		<h2 className="eventTitle">
           		 {this.state.eventName}
          		</h2>
          		<p className="shortDescription">
            		{this.state.shortDescription} <b className="eventDate">• {this.state.date}</b>
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