import React from 'react';
import '../../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'
import Firebase from 'firebase'
import { db } from '../../firebase';
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
			photo: require('../images/StartScreen_elRyan_639361.jpg'),
			name: "...",
			fact1: "",
			fact2: "",
			fact3: "",
			fact4: "",
			fact5: "",
			ageGroup: "",
			gender: "",
			hometown: ""
		};


  }

	componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
        console.log(user)
				this.setState({ userId: user.uid });
        this.fetchFromDatabase();
			} else {
				this.setState({ user: null });
			}

			if (this.state.loading) {
				this.setState({ loading: false });
			}
    }.bind(this));
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

	fetchFromDatabase(){
		db.collection("users").doc(this.state.userId).get()
		/*.then(querySnapshot => {
     		var data = querySnapshot.docs.map(doc => doc.data());
     		this.setState({name: data[0]['name']});
     		this.setState({fact1: data[0]['fact1']});
     		this.setState({fact2: data[0]['fact2']});
     		this.setState({fact3: data[0]['fact3']});
     		this.setState({fact4: data[0]['fact4']});
     		this.setState({fact5: data[0]['fact5']});
     		this.setState({gender: data[0]['gender']});
     		this.setState({hometown: data[0]['hometown']});
     		this.setState({ageGroup: data[0]['age']});
   		var url = data[0]['photo'];
     		this.setState({photo: url});
		});*/
		.then( function(doc){
      if(doc.exists){
				let data = doc.data();
				this.setState({name: data['name']});
     		this.setState({fact1: data['fact1']});
     		this.setState({fact2: data['fact2']});
     		this.setState({fact3: data['fact3']});
     		this.setState({fact4: data['fact4']});
     		this.setState({fact5: data['fact5']});
     		this.setState({gender: data['gender']});
     		this.setState({hometown: data['hometown']});
     		this.setState({ageGroup: data['ageGroup']});
        console.log(doc.data())
				this.checkQuestionnaireFilled()
      } else {
        console.log("doc didn't exist") // NEED TO FIX THIS UP
				return window.location.href='/editprofile';
      }
    }.bind(this)).catch(function(error) {
      console.log("Error getting document:", error);
    });
	}

	checkQuestionnaireFilled(){
		var doc_ref = db.collection("user_questionaire").doc(this.state.userId);
		doc_ref.get().then((doc) => {
			if(doc.exists){
					console.log("questionnaire completed successfully")
			} else {
					console.log("doc didn't exist") // NEED TO FIX THIS UP
					return window.location.href='/questionnaire';
			}
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
          			height="200px"
          			width="400px"
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
				<Button variant="contained" color="primary" component={Link} to="/editprofile">
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
