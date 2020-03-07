import React from 'react';
import './EventCard.css';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid, Popover } from '@material-ui/core';
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
			eventId: eventId,
			userRegistered: false,
			open: false,
		};
		this.fetchFromDatabase(eventId);


		// this.state = {
    //   date: this.fetchFromDatabase(eventId),
    //   eventName: this.fetchFromDatabase(eventId),
    //   shortDescription: this.fetchFromDatabase(eventId),
    //   photo: require('../media/eventPhotos/wine_tasting.jpg'),
    // };

  }

	componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
        console.log(user)
				this.setState({ userId: user.uid });
				console.log("found user")
				console.log(user.uid);
				this.fetchUserRegistered()
			} else {
				this.setState({ userId: null });
			}

			if (this.state.loading) {
				this.setState({ loading: false });
			}
    }.bind(this));
	}

	fetchUserRegistered = (eventId) => {
		var doc_ref_user = db.collection("user_events").doc(this.state.userId);
		doc_ref_user.get().then(function(doc){
			if(doc.exists){
				let registeredForEvent = doc.get("going_events").includes(this.state.eventId);
				this.setState({userRegistered: registeredForEvent});
				console.log(doc.data());
			} else {
				console.log("user events doc didn't exist") // NEED TO FIX THIS UP
			}

		}.bind(this)).catch(function(error) {
			console.log("Error getting document:", error);
		});
		}



	// 	going_events: Firebase.firestore.FieldValue.arrayUnion(this.state.eventId);
	// }, {merge:true});


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


	onClickButton = () => {
		if(this.state.userRegistered){
			this.unregisterForEvent()
			this.setState({userRegistered : false})
		} else {
			this.registerForEvent()
			this.setState({userRegistered : true})
		}
	}

	registerForEvent = () => {
		//update user events

		var doc_ref_user = db.collection("user_events").doc(this.state.userId);
		doc_ref_user.set({
    	going_events: Firebase.firestore.FieldValue.arrayUnion(this.state.eventId)
		}, {merge:true});
	//update event visitors
		var doc_ref_event = db.collection("event_visitors").doc(String(this.state.eventId));
		let userIdMap = {}
		userIdMap[this.state.userId] = true;
		doc_ref_event.set(userIdMap
		, {merge:true});
		//doc_ref_user.set(this.state.responses, {merge:true}).then(() => {
			// console.log("props?");
			// console.log(this.props);
			// this.props.history.push("/profile");
		//});
	}

	unregisterForEvent = () => {
		//update user events

		var doc_ref_user = db.collection("user_events").doc(this.state.userId);
		doc_ref_user.update({
		going_events: Firebase.firestore.FieldValue.arrayRemove(this.state.eventId)
	});
	//update event visitors
	var doc_ref_event = db.collection("event_visitors").doc(String(this.state.eventId));
	let userIdMap = {}
	userIdMap[this.state.userId] = false

	doc_ref_user.update(userIdMap);
	}


	handleTouchTap = (event) => {
    	// This prevents ghost click.
    	event.preventDefault();
    	this.setState({
      		open: true,
      		anchorEl: event.currentTarget,
    	});
  	};

  	handleRequestClose = () => {
    	this.setState({
      		open: false,
    	});
  	};







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
				<Button variant="contained" color="primary" onClick={this.onClickButton}>
					{this.state.userRegistered ? "Cancel Tickets" : "Buy Tickets"}
				</Button>
				<h1>$12-$20</h1>
				<Grid container direction="row" justify="center" alignItems="center">
				<IconButton>
					<Room />
				</IconButton>
				<h2>
					San Francisco
				</h2>


				<Grid container direction="row" justify="center" alignItems="center">
				<Button
				variant="contained"
				color="primary"
            	onClick={this.handleTouchTap}
            	>
            		Hello
            	</Button>
          		<Popover
            	open={this.state.open}
            	anchorEl={this.state.anchorEl}
            	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            	targetOrigin={{horizontal: 'left', vertical: 'top'}}
            	onRequestClose={this.handleRequestClose}
          		>
            		hello
          		</Popover>
          		</Grid>
				</Grid>
				</Grid>
			</Grid>
		</div>);
  }
}

export default EventPage;
