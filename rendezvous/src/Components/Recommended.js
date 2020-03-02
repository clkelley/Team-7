import React from 'react';
import './EventCard.css';
import '../App.css';
import './LoginPage.css'

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Firebase from 'firebase'

import { AppBar, Card, CardActionArea, CardActions, CardContent, CardMedia,
  Drawer, Tabs, Tab, Toolbar, Typography, IconButton, Grid, List, ListItem, ListItemText } from '@material-ui/core';

import EventCard from './EventCard'

import DisplayEvents from './DisplayEvents'
import { db } from '../firebase';

class RecommendedPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
      user: null,
			userId: "",
			matches: {},
      recommended_events: [],
		}

    this.componentDidMount = this.componentDidMount.bind(this)
    // var user = Firebase.auth().currentUser
    // console.log("come on dawg")
    // console.log(user)
    // if (user != null){
    //   this.setState({userId: user.uid});
    //   this.search()
    // } else {
    //   // DO SOMETHING HERE
    // }
  }

  componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
        console.log(user)
				this.setState({ userId: user.uid });
        this.search()
			} else {
				this.setState({ user: null });
			}

			if (this.state.loading) {
				this.setState({ loading: false });
			}
    }.bind(this));
	 }

  search() {
    var doc_ref = db.collection("user_events").doc(this.state.userId);
    doc_ref.get().then( function(doc){
      if(doc.exists){
        this.setState({matches: doc.data()})
        this.setState({recommended_events: doc.data().get('recommended_events')})
        console.log(doc.data())
      } else {
        console.log("doc didn't exist") // NEED TO FIX THIS UP
      }
    }.bind(this)).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }

  render() {
    return (
      <div>
              <h1>Recommended For You</h1>
              <DisplayEvents eventIds={this.state.recommended_events} />

      </div>
    );
    }
}

export default RecommendedPage;
