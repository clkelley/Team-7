import React from 'react';
import './EventCard.css';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid, Popover, Menu, MenuItem } from '@material-ui/core';
import headerPhoto from './images/header_concert1.jpg';
import headerPhoto2 from './images/header_concert2.jpg';
import Firebase from 'firebase'
import { db } from '../firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BookmarkBorder, Bookmark, Room, NavigateNext } from '@material-ui/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MatchCard from './MatchCard'


class EventPage extends React.Component {

  constructor(props) {
    super(props);
		const eventId = parseInt(props.match.params.eventId);
		this.state = {
			date: "loading...",
			eventName: "loading...",
			shortDescription: "loading...",
			photo: "",
			eventId: eventId,
			userRegistered: false,
			open: false,
			location: "loading...",
			price: "loading...",
			loading: true,
			numSold: 0,
			max_capacity: 0,
			capacity_reached: false,
		};
		// this.fetchFromDatabase(eventId);
  }

	componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				this.setState({ userId: user.uid });
				this.fetchUserRegistered()
			} else {
				this.setState({ userId: null });
			}
			this.setState({ loading: false });
    }.bind(this));

		this.fetchFromDatabase(this.state.eventId);
	}

	/*
	* Check whether the current user is already registered to go to the event
	*/
	fetchUserRegistered = (eventId) => {
		var doc_ref_user = db.collection("user_events").doc(this.state.userId);
		doc_ref_user.get().then(function(doc){
			if(doc.exists){
				let registeredForEvent = doc.get("going_events").includes(this.state.eventId);
				this.setState({userRegistered: registeredForEvent});
				if(registeredForEvent){
					this.fetchMatches();
				}
			} else {
				console.log("user events doc didn't exist")
			}

		}.bind(this)).catch(function(error) {
			console.log("Error getting document:", error);
		});
		}

	fetchMatches = () => {
		console.log("fetch from database eventid" + this.state.eventId);
		db.collection("event_matches").doc(String(this.state.eventId)).get()
		.then(function(doc){
				if(doc.exists){
					const data = doc.data();
					console.log("match data:");
					//console.log(data);
					for(var groupId in Object.keys(data)){
						var group = data[groupId];
						//console.log(group);
						if(group.includes(this.state.userId)){
							//groupId is the match group
							group.splice(group.indexOf(this.state.userId), 1);
						 	this.setState({matchGroup: group, matchIndex: 0})
							console.log(group);
						}
					}
				} else {
					console.log("can't find match data");
				}

     		// this.setState({date: data[0]['date']});
     		// this.setState({shortDescription: data[0]['short_description']});
     		// this.setState({eventName: data[0]['event_name']});
				// this.setState({location: data[0]['location']});
				// this.setState({price: data[0]['price']});
				// this.setState({numSold: data[0]['num_sold']});
				// if (eventId === 2) this.setState({photo: require('../media/eventPhotos/beer_tasting.jpg')});
				// else if (eventId === 3) this.setState({photo: require('../media/eventPhotos/yoga.jpg')});
				// else if (eventId === 4) this.setState({photo: require('../media/eventPhotos/food_festival.jpg')});
				// else if (eventId === 5) this.setState({photo: require('../media/eventPhotos/comedy.jpg')});
				// else if (eventId === 6) this.setState({photo: require('../media/eventPhotos/concert.jpg')});
				// else if (eventId === 7) this.setState({photo: require('../media/eventPhotos/hike.jpg')});
				// else if (eventId === 8) this.setState({photo: require('../media/eventPhotos/food.jpg')});
				// else if (eventId === 9) this.setState({photo: require('../media/eventPhotos/cruise.jpg')});
				// else if (eventId === 1) this.setState({photo: require('../media/eventPhotos/wine_tasting.jpg')});
   		}.bind(this)).catch(function(error) {
				console.log("Error getting document:", error);
			});
	}


	fetchFromDatabase(eventId){
		console.log("fetch from database eventid" + eventId);
		db.collection("event_data").where("eventId", "==", eventId).get()
		.then(querySnapshot => {
     		var data = querySnapshot.docs.map(doc => doc.data());
     		this.setState({date: data[0]['date']});
     		this.setState({shortDescription: data[0]['short_description']});
     		this.setState({eventName: data[0]['event_name']});
				this.setState({location: data[0]['location']});
				this.setState({price: data[0]['price']});
				this.setState({numSold: data[0]['num_sold']});
				this.setState({max_capacity: data[0]['max_capacity']});
				if (this.state.numSold >= this.state.max_capacity){
					this.setState({capacity_reached: true});
				}
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

	/*
	* Signup / Remove Signup for an event for a particular user
	*/
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
		doc_ref_event.set(userIdMap, {merge:true});

		//update event num going
		this.setState({numSold: this.state.numSold + 1});
		var ref = db.collection("event_data").doc(this.state.eventId.toString())
		ref.update({'num_sold' : (parseInt(this.state.numSold) + 1).toString()})


	}

	unregisterForEvent = () => {
		//update user events
		var doc_ref_user = db.collection("user_events").doc(this.state.userId);
		doc_ref_user.update({
			going_events: Firebase.firestore.FieldValue.arrayRemove(this.state.eventId)
		});

		var doc_ref_event = db.collection("event_visitors").doc(String(this.state.eventId));

		var dict = {}
		dict[this.state.userId] = Firebase.firestore.FieldValue.delete()
		doc_ref_event.update(dict)

		var ref = db.collection("event_data").doc(this.state.eventId.toString())
		ref.update({'num_sold' : (parseInt(this.state.numSold) - 1).toString()})
		this.setState({numSold: this.state.numSold - 1});
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

		nextMatch = () => {
			var nextIndex = (this.state.matchIndex + 1) % (this.state.matchGroup.length);
			this.setState({matchIndex : nextIndex})
		}


  render() {
		let top_image;
		if(this.state.photo != null){
			top_image = <img src={this.state.photo} style={{height:300, width:'100%', objectFit: 'cover'}}/>
		} else {
			top_image = <div></div>
		}

		let button_label = '';

		if (this.state.userRegistered){
			button_label = 'Cancel Ticket'
		}
		else if(this.state.capacity_reached){
			button_label = 'Out of Tickets'
		} else {
			button_label = 'Buy Ticket'
		}
    return (
		<div>
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
				<Button variant="contained" color="primary" onClick={this.onClickButton} disabled={this.state.capacity_reached && !this.state.userRegistered}>
					{button_label}
				</Button>
				<h1>Price: {this.state.price}</h1>
				<Grid container direction="row" justify="center" alignItems="center">
				<IconButton>
					<Room />
				</IconButton>
				<h2>
					{this.state.location}
				</h2>



          		{this.state.matchGroup && <Grid container direction="row" justify="center" alignItems="center">
				<Button
				variant="contained"
				color="primary"
            	onClick={this.handleTouchTap}

            	>
            		Matches
            	</Button>
							<Popover
							open={this.state.open}
							onClose={this.handleRequestClose}
							anchorEl={this.state.anchorEl}
							>
							<Grid container alignItems="flex-start">
							<MatchCard userId={this.state.matchGroup[this.state.matchIndex]}/>
							<IconButton onClick={this.nextMatch}>
								< NavigateNext />
							</IconButton>
							</Grid>
							</Popover>
          		</Grid>}



				</Grid>
				</Grid>
			</Grid>
		</div>);
  }
}

export default EventPage;
