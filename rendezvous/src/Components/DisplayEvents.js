import React from 'react';
import EventCard from './EventCard';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import Firebase from 'firebase';
import { db } from '../firebase';

class DisplayEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
  	let eventArray = this.props.eventIds;
	let displayCards = eventArray.map(function(eventId) {
  		return (
  			<EventCard eventId={eventId} key={eventId}/>
  		);
  	});


  	return(
  		<Grid container spacing={3}>
  		{displayCards}
  		</Grid>
  	);
  }
}

export default DisplayEvents;
