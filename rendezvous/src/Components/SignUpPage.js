import React from 'react';

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

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			email: "",
			password: "",
      errorMessage: "",
		}
  }

  /*
  * Called when signup button is clicked after entering an email and password
  * If successfuly creates a new user -> goes straight to editprofile page
  * If not successful, displays error.
  */
  handleSubmit = (event) => {
    this.setState({errorMessage:""});
    event.preventDefault();
    const { email, password } = event.target.elements;
		Firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
		.then(() => {
				return window.location.href='/editprofile';
		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
      this.setState({errorMessage:error.message});
		}.bind(this));

	}

  render() {
    return(
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Sign up
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
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

export default SignUpPage;
