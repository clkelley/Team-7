import React from 'react';
import './EventCard.css';
import '../App.css';
import './LoginPage.css'


import Firebase from 'firebase'


import EventCard from './EventCard'

import DisplayEvents from './DisplayEvents'
import { db } from '../firebase';

class MyEventsPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
      user: null,
			userId: "",
			matches: {},
      going_events: [],
      planned_events: [],
      past_events:[],
      loading: true
		}

    Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
        console.log(user)
				this.setState({ userId: user.uid });
        this.search()
			} else {
				this.setState({ user: null });
			}

    }.bind(this));

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
	}

  search() {
    var doc_ref = db.collection("user_events").doc(this.state.userId);
    doc_ref.get().then( function(doc){
      if(doc.exists){
        this.setState({matches: doc.data()})
        this.setState({going_events: doc.data()['going_events']})
        this.setState({planned_events: doc.data()['planned_events']})
        this.setState({went_events: doc.data()['went_events']})
        this.setState({ loading: false });
      } else {
        console.log("doc didn't exist") //TODO
      }
    }.bind(this)).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }

  render() {
    return (
      <div>
          <h1>Your Going Events</h1>
          <DisplayEvents eventIds={this.state.going_events} />
          <h1>Your Planned Events</h1>
          <DisplayEvents eventIds={this.state.planned_events} />
          <h1>Your Went Events</h1>
          <DisplayEvents eventIds={this.state.went_events} /> 

      </div>
    );
    }
}

export default MyEventsPage;
