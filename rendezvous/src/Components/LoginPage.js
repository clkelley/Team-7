import React from 'react';
import './EventCard.css';
import '../App.css';
import './LoginPage.css'

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Firebase from 'firebase'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			email: "",
			password: "",
		}
  }

handleSubmit(event) {
		console.log('hmmm')
		console.log(this.state.password)
		console.log(this.state.email)
		Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => {
				return window.location.href='/myevents';
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
			<input
				name="email"
				value={this.state.email}
				onChange={(e) => {this.setState({email: e.target.value})}}
				type="text"
				placeholder="Email Address"
			/>
			<input
				name="password"
				value={this.state.password}
				onChange={(e) => {this.setState({password: e.target.value})}}
				type="password"
				placeholder="Password"
			/>
			<button onClick={(e) => this.handleSubmit(e)}>
							Login
			</button>
	    </div>
	);
  }
}

export default LoginPage;
