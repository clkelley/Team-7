import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';


class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId:""
    };
  }

  render() {

    return (
      <Grid item xs={6}>
    	<Card>
      		<CardActionArea>
       		<CardMedia
          		component="img"
         		 alt="Contemplative Reptile"
          		height="140"
          		image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          		title="Contemplative Reptile"
        	/>
        	<CardContent>
          		<Typography gutterBottom variant="h5" component="h2">
           		 {this.props.category}
          		</Typography>
          		<Typography variant="body2" color="textSecondary" component="p">
            		{this.props.location}
          		</Typography>
        	</CardContent>
      	</CardActionArea>
      	<CardActions>
       		 <Button size="small" color="primary">
          		Share
        	</Button>
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
