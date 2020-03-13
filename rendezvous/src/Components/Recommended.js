import React from 'react';
import '../App.css';
import './LoginPage.css'

import Firebase from 'firebase'

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
      loading: true
		}

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
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
        var data = doc.data()
        console.log(data);
        //this.setState({matches: doc.data()})
        this.setState({recommended_events: data['recommended_events']})
      } else {
        console.log("doc didn't exist") // TODO
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
