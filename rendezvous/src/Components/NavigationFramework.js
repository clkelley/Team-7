import React, { Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AppBar, Card, CardActionArea, CardActions, CardContent, CardMedia,
  Drawer, Tabs, Tab, Toolbar, Button, Typography, IconButton, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons'
import mainLogo from '../media/rendezvous_logo_white.png';

import SearchBar from './SearchBar'
import ExplorePage from './ExplorePage'
import EventCard from './EventCard'
import EventPage from './EventPage'
import Profile from './ProfilePage'
import LoginPage from './LoginPage'
import DisplayEvents from './DisplayEvents'
import SignUpPage from './SignUpPage'
import Firebase from 'firebase'
import MyEvents from './MyEvents'
import Recommended from './Recommended'
import QuestionnairePage from './QuestionnairePage'


function Explore() {
  return <div className="explorePage">
        <ExplorePage />
      </div>;
}

function ExploreContent() {
  return <div className="exploreContent">
    	<h2>Happening on Saturday, February 22nd</h2>
          <DisplayEvents eventIds={[9,6,8]} />
          <h2>Food and Drinks</h2>
          <DisplayEvents eventIds={[1,4,2]} />
          <h2>Free Events</h2>
          <DisplayEvents eventIds={[7,5,3]} />
  </div>;
}

function myEvents() {
  return <div className="myEventsPage">
        <MyEvents />
      </div>;
}

function Users() {
  return <div>
          <h1>Users</h1>
         </div>;
}
function checkPathnameValue(location) {
    const { pathname } = location;
    switch (pathname) {
      case '/':
      case '/explore':
      case '/myevents':
      case '/profile':
      break;
    default:
    return false;
    }
    return pathname;
}





class NavigationFramework extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, loggedIn : false };

    Firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      this.setState({loggedIn:true});
    } else {
      // No user is signed in.
      this.setState({loggedIn:false});
    }
  }.bind(this));
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log("width:"+ window.innerWidth + "height:" + window.innerHeight);
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }



  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({[side]: open });
  };

  eventCardClicked(eventID){

  }

  DesktopAppBar(){
    if (this.state.loggedIn){
      return <AppBar>
        <Toolbar className="toolbar">
          <img src={mainLogo} className="mainLogo" />
          <Route
            path="/"
            render={({location}) => (
              <Fragment>
                <Tabs value={checkPathnameValue(location.pathname)} className="tabs" indicatorColor="primary">
                  <Tab label="Recommended" value="/" component={Link} to='/'/>
                  <Tab label="Explore" value="/explore" component={Link} to='/explore' />
                  <Tab label="My Events" value="/myevents" component={Link} to='/myevents' />
                  <Tab label="Profile" value="/profile" component={Link} to='/profile' />
                </Tabs>
              </Fragment>
            )}
          />
        </Toolbar>
      </AppBar>;
    } else {
      return <AppBar>
        <Toolbar className="toolbar">
          <img src={mainLogo} className="mainLogo" />
          <Route
            path="/"
            render={({location}) => (
                <Fragment>
                    <Tabs value={checkPathnameValue(location.pathname)} className="tabs" indicatorColor="primary">
                    <Tab label="Explore" value="/explore" component={Link} to='/explore'/>
                    <Tab label="Log In" value="/login" component={Link} to='/login' />
                    </Tabs>
                </Fragment>
              )}
            />
          </Toolbar>
        </AppBar>;
    }

  }

  MobileAppBar(){
    if (this.state.loggedIn){
    return <div>
    <AppBar>
      <Toolbar className="toolbar">
        <IconButton onClick={this.toggleDrawer('left', true)}>
          <Menu style={{ color:'#ffffff' }}/>
        </IconButton>
        <img src={mainLogo} className="mainLogo" />
      </Toolbar>
    </AppBar>
    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
    <List>
      <ListItem button component={Link} to='/'>
        <ListItemText primary="Recommended"/>
      </ListItem>
      <ListItem button component={Link} to='/explore'>
        <ListItemText primary="Explore"/>
      </ListItem>
      <ListItem button component={Link} to='/myevents'>
        <ListItemText primary="My Events"/>
      </ListItem>
      <ListItem button component={Link} to='/profile'>
        <ListItemText primary="Profile"/>
      </ListItem>
    </List>
    </Drawer>
    </div> }
    else {
      return <div>
      <AppBar>
        <Toolbar className="toolbar">
          <IconButton onClick={this.toggleDrawer('left', true)}>
            <Menu style={{ color:'#ffffff' }}/>
          </IconButton>
          <img src={mainLogo} className="mainLogo" />
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
      <List>
        <ListItem button component={Link} to='/explore'>
          <ListItemText primary="Explore"/>
        </ListItem>
        <ListItem button component={Link} to='/login'>
          <ListItemText primary="Log In"/>
        </ListItem>
      </List>
      </Drawer>
      </div>
    }
  }


  render() {
    let topbar;
    let displayname;

    if(this.state.width < this.state.height && this.state.width < 1000){
      topbar = this.MobileAppBar();
    } else {
      topbar = this.DesktopAppBar();
    }



    return (
      <Router>
      <div className="App">
        {topbar}
        <div>
        <Switch>
        	<Route path="/explore">
        		<Grid className="bigGrid">
            <Explore />
            <DisplayEvents eventIds={[1,2,3, 4, 5, 6, 7, 8, 9]} />
            </Grid>
          </Route>
          <Route path="/events/:eventId" component={EventPage}>
          </Route>
          <Route path="/signup">
           {!this.state.loggedIn ? <Grid container className="bigGrid"><SignUpPage /></Grid> : <Redirect to='/' /> }
          </Route>
          <Route path="/login">
            {!this.state.loggedIn ? <Grid container className="bigGrid"><LoginPage /></Grid> : <Redirect to='/' /> }
          </Route>
          <Route path="/myevents">
            {this.state.loggedIn ? <Grid className="bigGrid"><MyEvents /></Grid> : <Redirect to='/login' /> }
          </Route>
          <Route path="/profile">
            {this.state.loggedIn ? <Profile /> : <Redirect to='/login' /> }
          </Route>
          <Route path="/questionnaire" render={(props) =>
            <Grid className="bigGrid">
            {this.state.loggedIn ? <QuestionnairePage {...props}/> : <Redirect to='/login' /> }
            </Grid>
          }/>
          <Route path="/">
            <Grid className="bigGrid">
            <Recommended />
            </Grid>
          </Route>
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default NavigationFramework;
