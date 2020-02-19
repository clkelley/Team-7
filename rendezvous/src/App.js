import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Card, CardActionArea, CardActions, CardContent, CardMedia,
  Drawer, Tabs, Tab, Toolbar, Button, Typography, IconButton, Grid } from '@material-ui/core';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';


import SearchBar from './Components/SearchBar'
import ExplorePage from './Components/ExplorePage'
import EventCard from './Components/EventCard'
import Faraz from './Components/Faraz'

/*https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4*/
/*https://reacttraining.com/react-router/web/guides/quick-start*/
/*https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb*/
function Home() {
  return <h1>Home</h1>;
}

function Explore() {
  return <div>
  			<ExplorePage/>
  		</div>;
}

function MyEvents() {
	return <h1>My Events</h1>;
}

function Users() {
  return <div>
          <Faraz/>
         </div>;
}

function App() {
  return (
    <Router>
    <div className="App">
      <AppBar>
        <Toolbar className="toolbar">
          {/*<IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>*/}
          <h1>
            Rendezvous
          </h1>
          <Route
            path="/"
            render={({location}) => (
              <Fragment>
                <Tabs value={location.pathname} className="tabs" indicatorColor="white">
                  <Tab label="Recommended" value="/" component={Link} to='/'/>
                  <Tab label="Explore" value="/explore" component={Link} to='/explore' />
                  <Tab label="My Events" value="/myevents" component={Link} to='/myevents' />
                  <Tab label="Users" value="/settings" component={Link} to='/settings' />
                </Tabs>
              </Fragment>
            )}
          />

          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
      <div>
      <Typography variant="h3">
          Rendezvous
      </Typography>
      <Switch>
      	<Route path="/explore">
      		<Grid className="bigGrid" spacing={3}>
          <Explore />
          <h2>Happening on Saturday, February 15th</h2>
          <Grid container spacing={3}>
            <EventCard />
            <EventCard />
          </Grid>
          <h2>Food and Drinks</h2>
          <Grid container spacing={3}>
            <EventCard />
            <EventCard />
          </Grid>
          </Grid>
        </Route>
        <Route path="/myevents">
          <Grid className="bigGrid"><MyEvents /></Grid>
        </Route>
        <Route path="/settings">
          <Grid className="bigGrid"><Users /></Grid>
        </Route>
        <Route path="/">
          <Grid className="bigGrid">
          <Home />
          <Grid container spacing={3}>
            <EventCard />
            <EventCard />
            <EventCard />
          </Grid>
          </Grid>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
  {/*<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Welcome to Rendezvous!
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>*/}
  {/*}<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
  </Router>*/}
}

export default App;
