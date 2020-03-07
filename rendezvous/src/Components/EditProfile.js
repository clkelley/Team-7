import React from 'react';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
                                 Button, Typography, IconButton, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room, PhotoCamera } from '@material-ui/icons'
import Firebase from 'firebase'
import { db } from '../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class EditProfile extends React.Component {

  constructor(props) {
        super(props);
                this.state = {
									errorMessage: "",
									firstTime: false,
									responses: {
                        name: "",
                        fact1: "",
                        fact2: "",
                        fact3: "",
                        fact4: "",
                        fact5: "",
                        ageGroup: "",
                        gender: "",
                        hometown: ""
                }};
				Firebase.auth().onAuthStateChanged(function(user) {
					if (user) {
						console.log(user)
						this.setState({ userId: user.uid });
						this.retrieveProfile()
					} else {
						this.setState({ user: null });
					}
					if (this.state.loading) {
						this.setState({ loading: false });
					}
				}.bind(this));
  }

componentDidMount(){

 }

 retrieveProfile = () =>{
 		var doc_ref_profile = db.collection("users").doc(this.state.userId);
 		doc_ref_profile.get().then(function(doc){
 			if(doc.exists){
				let data = doc.data();
				this.setState({
					responses: {
						photo: doc.get("photo") || "",
                        name: doc.get("name") || "",
                        fact1: doc.get("fact1") || "",
                        fact2: doc.get("fact2") || "",
                        fact3: doc.get("fact3") || "",
                        fact4: doc.get("fact4") || "",
                        fact5: doc.get("fact5") || "",
                        ageGroup: doc.get("ageGroup") || "",
                        gender: doc.get("gender") || "",
                        hometown: doc.get("hometown") || "",
                }

				})
 				console.log(doc.data());

				//todo: prefill profile
 			} else {
 				console.log("user profile doc didn't exist") // NEED TO FIX THIS UP
				this.setState({firstTime: true})
			}
 		}.bind(this)).catch(function(error) {
 			console.log("Error getting document:", error);
 		});
 		}



	handleChange = (event) => {
		this.setState({responses: {...this.state.responses, [event.target.name]: event.target.value}})
	}

	handleSubmit = (event) => {
			console.log("about to send responses:")
			console.log(this.state.responses);
			if(this.checkAllFilled()){
				this.updateFirebase();
			} else {
				this.setState({errorMessage:"Please complete your profile before submitting."});
			}

	}

	checkAllFilled = () => {
		for (const responseKey in this.state.responses) {
			console.log(responseKey)
			if (this.state.responses[responseKey] === ""){
				console.log("missing:" + responseKey);
				return false;
			}
		}
		return true;
	}

	updateFirebase = () => {
			var doc_ref = db.collection("users").doc(this.state.userId);
			doc_ref.set(this.state.responses, {merge:true}).then(() => {
				console.log("props?");
				console.log(this.props);
				this.props.history.push("/profile");
	});
 }


render() {
	return (
		<Grid container xs={12} spacing={2} alignItems="center">
			{this.state.firstTime && <Typography component="h4" color="primary">
				Please complete your profile to setup your account!
			</Typography>}
			<Grid container item xs={12} spacing={1}>
				<Grid item>
				<TextField label="Name" name="name" value={this.state.responses["name"]} onChange={this.handleChange}/>
				</Grid>
				<Grid item>
				<FormControl>
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select
	          labelId="demo-simple-select-label-age"
	          id="demo-simple-select-age"
	          value={this.state.responses["ageGroup"]}
	          onChange={this.handleChange}
						name="ageGroup"
	        >
	          <MenuItem value={"20-30"}>20-30</MenuItem>
	          <MenuItem value={"30-40"}>30-40</MenuItem>
						<MenuItem value={"40-50"}>40-50</MenuItem>
	          <MenuItem value={"50+"}>50+</MenuItem>
	      </Select>
				</FormControl>
				</Grid>
				<Grid item>
				<TextField label="Hometown" name="hometown" onChange={this.handleChange} value={this.state.responses["hometown"]}/>
				</Grid>
				<Grid item>
				<FormControl>
				<InputLabel id="demo-simple-select-label">Gender</InputLabel>
				<Select
	          labelId="demo-simple-select-label"
	          id="demo-simple-select"
	          value={this.state.responses["gender"]}
	          onChange={this.handleChange}
						name="gender"
	        >
	          <MenuItem value={"Male"}>Male</MenuItem>
	          <MenuItem value={"Female"}>Female</MenuItem>
						<MenuItem value={"Non-binary"}>Non-binary</MenuItem>
	          <MenuItem value={"Other"}>Other</MenuItem>
	      </Select>
				</FormControl>
				</Grid>
			</Grid>
			<Grid item>
			<Typography> Five facts about me... </Typography>
			</Grid>
			<Grid container direction="row" justify="left" alignItems="center">
      <input accept="image/*" type="file" onChange={this.handleChange} value={this.state.responses["photo"]}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </Grid>
			<Grid container item xs={12} spacing={1} alignItems="flex-start">
				<Grid item xs={12}>
					<TextField label="1" name="fact1" onChange={this.handleChange} value={this.state.responses["fact1"]}/>
					</Grid>
				<Grid item xs={12}>
					<TextField label="2" name="fact2" onChange={this.handleChange} value={this.state.responses["fact2"]}/>
					</Grid>
					<Grid item xs={12}>
					<TextField label="3" name="fact3" onChange={this.handleChange} value={this.state.responses["fact3"]}/>
					</Grid>
					<Grid item xs={12}>
					<TextField label="4" name="fact4" onChange={this.handleChange} value={this.state.responses["fact4"]}/>
					</Grid>
					<Grid item xs={12}>
					<TextField label="5" name="fact5" onChange={this.handleChange} value={this.state.responses["fact5"]}/>
					</Grid>
			</Grid>
			<Grid item xs={12}>
			<Button variant="contained" color="primary" onClick={this.handleSubmit}>
				Submit
			</Button>
			<Typography component="h4" color="error">
				{this.state.errorMessage}
			</Typography>
			</Grid>
		</Grid>
               );
  }
}

export default EditProfile;
