import React from 'react';
import '../../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
                                 Button, Typography, IconButton, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room, Publish } from '@material-ui/icons'
import Firebase from 'firebase'
//import storage from 'firebase';
import { db } from '../../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class UploadPhoto extends React.Component {

  constructor(props) {
        super(props);
                this.state = {

                };
  }

componentDidMount(){

 }

	handlePhotoChange = (event) => {
		if (event.target.files[0]) {
      const image = event.target.files[0];
			this.setState({ image });
      console.log("got image changed");
    }
	}

	handlePhotoUpload = () => {
		const storage = Firebase.storage()
		const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ image_url: url});
						this.props.photo_callback(url);
          });
      }
    );
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

			<Grid container direction="column" alignItems="flex-start">
			<img
          src={this.state.image_url || this.props.currentPhoto || "https://via.placeholder.com/100x100"}
          alt="Uploaded Images"
          height="100"
          width="100"
      />
			<Grid container direction="row" alignItems="center">
      <input accept="image/*" type="file" onChange={this.handlePhotoChange}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.handlePhotoUpload}>
          <Publish />
        </IconButton>
      </label>
			</Grid>

      </Grid>
               );
  }
}

export default UploadPhoto;
