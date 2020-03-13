import React from 'react';
import './EventCard.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid, Popover } from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class MatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			userId: props.userId,
    };
  }

	componentDidMount(){
		this.downloadProfile(this.state.userId)
	}

	componentDidUpdate(prevProps){
		if(prevProps.userId !== this.props.userId){
			this.setState({userId: this.props.userId});
			// FOR SOME REASON, STATE DOESN't UPDATE SO PASSED PROP AS PARAMETER
			this.downloadProfile(this.props.userId);
		}

	}

	downloadProfile = (x) => {
		db.collection("users").doc(x).get()
		.then( function(doc){
      if(doc.exists){
				let data = doc.data();
				this.setState({name: data['name']});
     		this.setState({fact1: data['fact1']});
     		this.setState({fact2: data['fact2']});
     		this.setState({fact3: data['fact3']});
     		this.setState({fact4: data['fact4']});
     		this.setState({fact5: data['fact5']});
     		this.setState({photo: data['photo']})
      } else {
        console.log("doc didn't exist") // NEED TO FIX THIS UP
      }
    }.bind(this)).catch(function(error) {
      console.log("Error getting document:", error);
    });
	}

  render() {
    return (
			<Grid item xs={12}>
			<Card>
				<CardMedia
					component="img"
					height="200"
					width="200"
					src={this.state.photo}
				/>
				<CardContent>
						<h2 className="eventTitle">
							{this.state.name || "Loading..."}
						</h2>
						<h3>
							{this.state.fact1 || "Loading..."}
						</h3>
						<h3>
							{this.state.fact2 || "Loading..."}
						</h3>
						<h3>
							{this.state.fact3 || "Loading..."}
						</h3>
						<h3>
							{this.state.fact4 || "Loading..."}
						</h3>
						<h3>
							{this.state.fact5 || "Loading..."}
						</h3>
				</CardContent>
				</Card>
				</Grid>

    );
	}
}

export default MatchCard;
