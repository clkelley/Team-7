import React, { Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Card, CardActionArea, CardActions, CardContent, CardMedia,
  Drawer, Tabs, Tab, Toolbar, Button, Typography, IconButton, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons'
import mainLogo from '../media/rendezvous_logo_white.png';

import SearchBar from './SearchBar'
import ExplorePage from './ExplorePage'
import EventCard from './EventCard'
import EventPage from './EventPage'
import LoginPage from './LoginPage'
import DisplayEvents from './DisplayEvents'

function Home() {
  return <h1>Recommended for You</h1>;
}

function Explore() {
  return <div className="explorePage">
        <ExplorePage />
      </div>;
}

function ExploreContent() {
  return <div className="exploreContent">
    	<h2>Happening on Saturday, February 22nd</h2>
          <Grid container spacing={3} >
            <EventCard eventId={9}/>
            <EventCard eventId={8}/>
            <EventCard eventId={6}/>
          </Grid>
          <h2>Food and Drinks</h2>
          <Grid container spacing={3}>
            <EventCard eventId={1}/>
            <EventCard eventId={4}/>
            <EventCard eventId={2}/>
          </Grid>
          <h2>Free Events</h2>
          <Grid container spacing={3}>
            <EventCard eventId={7}/>
            <EventCard eventId={5}/>
            <EventCard eventId={3}/>
          </Grid>
  </div>;
}

function MyEvents() {
  return <div>
          <h1>Your Upcoming Events</h1>
          <Grid container spacing={3} >
            <EventCard eventId={1}/>
            <EventCard eventId={2}/>
            <EventCard eventId={3}/>
          </Grid>
          </div>
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
      case '/settings':
      break;
    default:
    return false;
    }
    return pathname;
}



function DesktopAppBar(){
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
              <Tab label="Settings" value="/settings" component={Link} to='/settings' />
            </Tabs>
          </Fragment>
        )}
      />
    </Toolbar>
  </AppBar>;
}

class NavigationFramework extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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

  MobileAppBar(){
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
      <ListItem button component={Link} to='/settings'>
        <ListItemText primary="Settings"/>
      </ListItem>
    </List>
    </Drawer>
    </div>
  }


  render() {
    let topbar;

    if(this.state.width < this.state.height && this.state.width < 1000){
      topbar = this.MobileAppBar();
    } else {
      topbar = <DesktopAppBar />
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
            <DisplayEvents eventIds={[1,2,3]} />
            </Grid>
          </Route>
          <Route path="/events/:eventId" component={EventPage}>
          </Route>
          <Route path="/myevents">
            <Grid className="bigGrid"><MyEvents /></Grid>
          </Route>
          <Route path="/settings">
            <Grid className="bigGrid"><LoginPage /></Grid>
          </Route>
          <Route path="/">
            <Grid className="bigGrid">
            <Home />
            <ExploreContent />
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
