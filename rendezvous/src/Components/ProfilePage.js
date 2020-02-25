import React from 'react';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'
import Firebase from 'firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


class Profile extends React.Component {

  constructor(props) {
	super(props);
		this.state = {
			photo: require('./images/StartScreen_elRyan_639361.jpg'),
			name: "Ryan Gosling",
			fact1: "I like long walks on the beach.",
			fact2: "I love to cook.",
			fact3: "I wanted to be a chef before I became an actor.",
			fact4: "I wish I knew how to surf.",
			fact5: "I'm an only child.",
			ageGroup: "30-35",
			gender: "Male",
			hometown: "London, Canada"
		};


  }

	handleLogout(){
		Firebase.auth().signOut()
		.then(() => {
				return window.location.href='/login';
		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(error.message)
		});
	}


  render() {
    return (
		<div>
			<Grid container spacing={1} style={{ padding: 100}}>

				<Card style={{padding: 30}}>
				<h1>
					{this.state.name || "Loading..."}
				</h1>
				<CardMedia
          			component="img"
          			height="300"
          			width="300"
				src={this.state.photo}
        			/>
				<CardContent>
				<h2>
					{this.state.ageGroup || "Loading..."}
				</h2>
				<h2>
					{this.state.gender || "Loading..."}
				</h2>
				<h3>
					{this.state.hometown || "Loading..."}
				</h3>
				<Button variant="contained" color="primary" onClick={this.handleLogout}>
					Log Out
				</Button>
				<Button variant="contained" color="primary">
					Edit Profile
				</Button>
				</CardContent>
				</Card>
				<div style={{padding: 30}}/>
				<Card style={{padding: 30}}>
				<CardContent>
				<div align="left">
				<h2>
					Five facts about me...
				</h2>
				<h3>
					1. {this.state.fact1}
				</h3>
				<h3>
					2. {this.state.fact2}
				</h3>
				<h3>
					3. {this.state.fact3}
				</h3>
				<h3>
					4. {this.state.fact4}
				</h3>
				<h3>
					5. {this.state.fact5}
				</h3>
				</div>
				<div style={{padding: 50}}/>
				<Button variant="contained" color="primary" component={Link} to="/questionnaire" >
					My Questionnaire
				</Button>
				</CardContent>
				</Card>
			</Grid>
		</div>);
  }
}

export default Profile;
