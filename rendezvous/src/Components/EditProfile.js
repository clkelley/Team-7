import React from 'react';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
                                 Button, Typography, IconButton, Grid, TextField, MenuItem } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'
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
                        <Grid>
                                <TextField label="Name"/>
                                <TextField label="Age"/>

				<TextField id="select" label="Gender" value="Male">
  					<MenuItem value="Male">Male</MenuItem>
  					<MenuItem value="Female">Female</MenuItem>
				</TextField>

                                <TextField label="Hometown"/>
                                <h3> Five facts about me... </h3>
                                1. <TextField label=""/>
                                2. <TextField label=""/>
                                3. <TextField label=""/>
                                4. <TextField label=""/>
                                5. <TextField label=""/>
                        </Grid>
                </div>);
  }
}

export default EditProfile;
