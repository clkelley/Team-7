import React from 'react';
import './EventCard.css';
import '../App.css';
import './LoginPage.css'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Firebase from 'firebase'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			email: "",
			password: "",
      errorMessage:"test",
		}
  }

handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
		Firebase.auth().signInWithEmailAndPassword(email.value, password.value)
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
    /*return (
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
	);*/
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form noValidate onSubmit={this.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/signup" variant="body2">
              Don't have an account yet? Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
      <Typography component="h4" color="error">
        {this.state.errorMessage}
      </Typography>
      </Container>
  )
  }
}

export default LoginPage;
