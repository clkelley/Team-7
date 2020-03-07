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
import Firebase from 'firebase'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			email: "",
			password: "",
      errorMessage:"",
		}
  }

handleSubmit = (event) => {
    event.preventDefault();
		Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => {
				return window.location.href='/myevents';
		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(error.message)
      this.setState({errorMessage:error.message});
		}.bind(this));
	}

  onChange = (event) => {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
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
                onChange={this.onChange}
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
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
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
        <Typography component="h4" color="error">
          {this.state.errorMessage}
        </Typography>
        </Container>
    )
    }
}

export default LoginPage;
